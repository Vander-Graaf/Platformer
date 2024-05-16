class Enemy {
  constructor({
    position,
    velocity,
    height,
    width,
    color,
    health,
    alive = true,
    isHitted,
    imageSrc,
    scale = 0.079,
    givenXP,
    framesMax = 2,
    type,
    framesHold = 15,
    alignX = 0,
    alignY = 0,
  }) {
    this.position = position;
    this.velocity = velocity;
    this.height = height;
    this.width = width;
    this.color = color;
    this.health = health;
    this.alive = alive;
    this.isHitted = isHitted;
    this.type = type;
    this.image = new Image();
    this.image.src = imageSrc;
    this.scale = scale;
    this.givenXP = givenXP;
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
    Animation(this);
  }

  update() {
    this.draw();

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (!this.givenXP && this.health <= 0) {
      this.alive = false;
      player.exp += Math.round((1 * time) / 5);
      expPick.textContent = `xp: ${player.exp}/${player.requiredXP}`;
      this.givenXP = true;
    }

    checkCollisionIfAlive(
      player,
      this,

      // левая коллизия
      (first, second) => {
        PlayerDamage();
      },
      // правая коллизия
      (first, second) => {
        PlayerDamage();
      },
      //верхняя коллизия
      (first, second) => {
        PlayerDamage();
      },
      //нижняя колизия
      (first, second) => {
        PlayerDamage();
      }
    );

    if (this.position.x < player.position.x) {
      this.position.x -= Math.random() * 1 - 1;

      this.image.src = "./img/Skeleton enemy/Skeleton enemy.png";
      this.framesElapsed++;
      if (this.framesElapsed % this.framesHold === 0) {
        if (this.framesCurrent < this.framesMax - 1) {
          this.framesCurrent++;
        } else {
          this.framesCurrent = 0;
        }
      }
    } else if (this.position.x - 5 > player.position.x) {
      this.position.x -= Math.random() * 1;
      this.image.src = "./img/Skeleton enemy/Skeleton enemy-left.png";
      this.framesElapsed++;
      if (this.framesElapsed % this.framesHold === 0) {
        if (this.framesCurrent <= 12 && this.framesCurrent > 0) {
          this.framesCurrent--;
        } else {
          this.framesCurrent = 11;
        }
      }
    } else {
      this.framesElapsed++;
      if (this.framesElapsed % this.framesHold === 0) {
        if (this.framesCurrent <= 12 && this.framesCurrent > 0) {
          this.framesCurrent--;
        } else {
          this.framesCurrent = 11;
        }
      }
    }

    if (this.position.y < player.position.y) {
      this.position.y -= Math.random() * 1 - 1;
    } else if (this.position.y > player.position.y) {
      this.position.y -= Math.random() * 1;
    } else if (this.position.y === player.position.y) {
    }

    for (let i = 0; i <= FireMissles.length - 1; i++) {
      checkCollision(
        this,
        FireMissles[i],
        // левая коллизия
        (first, second) => {
          first.health -= weapons[0].damage;
        },

        // правая коллизия
        (first, second) => {
          first.health -= weapons[0].damage;
        },
        //верхняя коллизия
        (first, second) => {
          first.health -= weapons[0].damage;
        },
        //нижняя колизия
        (first, second) => {
          first.health -= weapons[0].damage;
        }
      );
    }

    checkCollision(
      this,
      scythe,
      // левая коллизия
      (first, second) => {
        first.health -= weapons[3].damage;
        console.log(first.health);
      },

      // правая коллизия
      (first, second) => {
        first.health -= weapons[3].damage;
        console.log(first.health);
      },
      //верхняя коллизия
      (first, second) => {
        first.health -= weapons[3].damage;
        console.log(first.health);
      },
      //нижняя колизия
      (first, second) => {
        first.health -= weapons[3].damage;
        console.log(first.health);
      }
    );
  }
}

let skeletons = [];

for (let i = 1; i <= 10; i++) {
  let skeleton = new Enemy({
    position: {
      x: i * 100 - 400,
      y: 500,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    width: 40,
    height: 50,
    health: 100,
    color: "gold",
    scale: 1.6,
    givenXP: false,
    framesMax: 12,
    framesHold: 3,
    alignX: 8,
    alignY: 10,
    imageSrc: "./img/Skeleton enemy/Skeleton enemy.png",
  });
  skeletons.push(skeleton);
}
