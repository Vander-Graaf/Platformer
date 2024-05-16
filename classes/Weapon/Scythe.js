let scytheRotation;

class Scythe {
  constructor({
    position,
    velocity,
    height,
    width,
    color,
    force,
    imageSrc,
    scale = 0.079,
    framesMax = 1,
    type,
    framesHold = 4,

    alignX = 45,
    alignY = 45,
  }) {
    this.position = position;
    this.velocity = velocity;
    this.height = height;
    this.width = width;
    this.color = color;
    this.force = force;
    this.type = type;
    this.image = new Image();
    this.image.src = imageSrc;
    this.scale = scale;
    this.framesMax = framesMax;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = framesHold;
    this.alignX = alignX;
    this.alignY = alignY;
  }

  draw() {
    // c.fillStyle = this.color;
    // c.fillRect(this.position.x, this.position.y, this.width, this.height);

    //c.drawImage(
    //  this.image,
    //  this.framesCurrent * (this.image.width / this.framesMax) + this.alignX,
    //  this.alignY,
    //  this.image.width / this.framesMax,
    //  this.image.height,
    //  this.position.x,
    //  this.position.y,
    //  (this.image.width / this.framesMax) * this.scale,
    //  this.image.height * this.scale
    //);

    updateTrail({ x: scythe.position.x + 32, y: scythe.position.y + 32 });
    drawTrail();

    gradeScythe -= 0.1;
    drawImageRot(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height,
      gradeScythe
    );
    // this.position.x = player.position.x;
    //this.position.y = player.position.y - 64;

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    let maximumVelocity = 8;

    if (this.position.x < player.position.x) {
      this.velocity.x += 0.2;
      if (this.velocity.x > maximumVelocity) {
        this.velocity.x = maximumVelocity;
      }
    } else if (this.position.x > player.position.x) {
      this.velocity.x -= 0.2;
      if (this.velocity.x < -maximumVelocity) {
        this.velocity.x = -maximumVelocity;
      }
    }

    if (this.position.y < player.position.y) {
      this.velocity.y += 0.2;
      if (this.velocity.y > maximumVelocity) {
        this.velocity.y = maximumVelocity;
      }
    } else if (this.position.y > player.position.y) {
      this.velocity.y -= 0.2;
      if (this.velocity.y < -maximumVelocity) {
        this.velocity.y = -maximumVelocity;
      }
    } else if (this.position.y === player.position.y) {
    }

    this.framesElapsed++;
    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent++;
      } else {
        this.framesCurrent = 0;
      }
    }
  }

  update() {
    this.draw();
  }
}

let scythe = new Scythe({
  position: {
    x: 100,
    y: 100,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  width: 64,
  height: 64,
  imageSrc: "./img/scythe.png",
  color: "black",
  scale: 1.8,
  framesMax: 1,

  alignX: 0,
  alignY: 0,
});

function drawImageRot(img, x, y, width, height, deg) {
  // Store the current context state (i.e. rotation, translation etc..)
  c.save();

  //Convert degrees to radian
  var rad = (1 * Math.PI) / 30;

  //Set the origin to the center of the image
  c.translate(x + width / 2, y + height / 2);

  //Rotate the canvas around the origin
  c.rotate(rad + grade);
  scytheRotation = grade;
  //c.fillStyle = spear.color;
  //c.fillRect((width / 2) * -1, (height / 2) * -1, width, height);
  //draw the image
  c.drawImage(img, (width / 2) * -1, (height / 2) * -1, width, height);

  // Restore canvas state as saved from above
  c.restore();
}
const trailLength = 20;

const trailPositions = [];
let trailSpacing = 1;

let gradeScythe = 0.1;
function drawTrail() {
  grade -= 0.15;
  for (let i = 0; i < trailPositions.length; i++) {
    c.save();
    c.translate(trailPositions[i].x, trailPositions[i].y);

    const rotationAngle = (i * Math.PI) / 30 + scytheRotation; // Calculate rotation angle
    // Increment grade variable
    c.rotate(rotationAngle); // Apply rotation
    // 1 - 0.2 - i / trailLength
    c.fillStyle = `rgba(94, 45, 122, ${0.2})`;

    c.fillRect(-5, -25, 9, 50);
    c.restore();
  }
}

function updateTrail(position) {
  // Add a position to the trailPositions array only if enough spacing has passed
  if (trailPositions.length === 0 || distance(trailPositions[0], position) >= trailSpacing) {
    trailPositions.unshift(position);
  }

  // If the trailPositions array is longer than the trail length, remove the last position
  if (trailPositions.length > trailLength) {
    trailPositions.pop();
  }
}

// Function to calculate the distance between two points
function distance(p1, p2) {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}
