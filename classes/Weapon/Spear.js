class Spear {
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

    grade += 5;
    drawImageRot(
      this.image,
      player.position.x - 35,
      player.position.y + 20,
      this.width,
      this.height,
      grade
    );

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

let spear = new Spear({
  position: {
    x: 100,
    y: 100,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  width: 110,
  height: 15,
  imageSrc: "./img/PIKA.png",
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
  var rad = (deg * Math.PI) / 180;

  //Set the origin to the center of the image
  c.translate(x + width / 2, y + height / 2);

  //Rotate the canvas around the origin
  c.rotate(rad);
  //c.fillStyle = spear.color;
  //c.fillRect((width / 2) * -1, (height / 2) * -1, width, height);
  //draw the image
  c.drawImage(img, (width / 2) * -1 - 55, (height / 2) * -1, width, height);

  // Restore canvas state as saved from above
  c.restore();
}
