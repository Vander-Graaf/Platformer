class Weapon {
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
    this.alive = alive;
    this.alignX = alignX;
    this.alignY = alignY;
  }

  draw() {
    // c.fillStyle = this.color;
    // c.fillRect(this.position.x, this.position.y, this.width, this.height);

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
    // this.image.src = "./img/pngPlayer/_Run_right.png";
    //this.image.src = "./img/fireBall.png";
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

    if (this.position.y > player.position.y + 1000) {
      let randomDirection = Math.random() * 4 - 2;
      let randomGravity = Math.random() * 4 - 2;
      this.velocity.x = randomDirection;
      this.velocity.y = randomGravity;

      this.position.x = player.position.x;

      this.position.y = player.position.y;

      this.force = -0.7;
    }

    if (this.force < 0.3) {
      this.force += 0.05;
    }

    this.velocity.y += this.force;
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
  }
}

let FireMissles = [];
for (let i = 1; i <= weapons[0].amount; i++) {
  let FireMissle = new Weapon({
    position: {
      x: null,
      y: 1000,
    },
    velocity: {
      x: 100,
      y: 0,
    },
    width: 20,
    height: 20,
    imageSrc: "./img/FireMissle.png",
    color: "orange",
    force: -0.4,
    scale: 1.3,
    framesMax: 4,

    alignX: 0,
    alignY: 0,
  });
  FireMissles.push(FireMissle);
}
