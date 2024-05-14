let isSmiteOnCooldown = true;

setInterval(() => {
  isSmiteOnCooldown = false;
}, 2500);
let randomIndex = 1;

function ToggleSmiteCd() {
  isSmiteOnCooldown = !isSmiteOnCooldown;
}

class Smite {
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
    alive = true,
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
    //c.fillStyle = this.color;
    //c.fillRect(this.position.x, this.position.y, this.width, this.height);

    c.drawImage(
      this.image,
      this.framesCurrent * (this.image.width / this.framesMax) + this.alignX,
      this.alignY,
      this.image.width / this.framesMax,
      this.image.height,
      this.position.x,
      this.position.y,
      (this.image.width / this.framesMax) * this.scale,
      this.image.height * this.scale
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

    if (!isSmiteOnCooldown) {
      randomIndex = Math.floor(Math.random() * skeletons.length);
      if (skeletons[randomIndex]) {
        this.framesCurrent = 0;
        this.image.src = "./img/Smite.png";
        isSmiteOnCooldown = true;
      }

      if (skeletons[randomIndex]) {
        this.position.x = skeletons[randomIndex].position.x + 10;
        this.position.y = skeletons[randomIndex].position.y - 30;
        skeletons[randomIndex].health -= weapons[1].damage;
      }
    }

    if (this.framesCurrent === 4) {
      this.image.src = "";
    }
  }
}

let Smites = [];
for (let i = 1; i <= weapons[1].amount; i++) {
  let smite = new Smite({
    position: {
      x: 10,
      y: 10,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    width: 22,
    height: 60,
    imageSrc: "",
    color: "blue",
    force: -0.0,
    framesHold: 64,
    scale: 2.0,
    framesMax: 5,
    alignX: 0,
    alignY: 0,
  });
  Smites.push(smite);
}
