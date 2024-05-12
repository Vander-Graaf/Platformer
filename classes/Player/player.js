let revive = false;
let grade = 1;
class Sprite {
  constructor({
    position,
    velocity,
    height,
    width,
    color,
    health,
    exp,
    lvl,
    requiredXP,
    isHitted,
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
    this.health = health;
    this.exp = exp;
    this.lvl = lvl;
    this.requiredXP = requiredXP;
    this.alive = alive;
    this.isHitted = isHitted;
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
    //   c.fillStyle = this.color;
    //   c.fillRect(this.position.x, this.position.y, this.width, this.height);

    Animation(this);

    this.image.src = "";

    if (player.alive) {
      if (this.velocity.x == 0 && this.velocity.y == 0 && lastkey == "d") {
        this.framesMax = 10;

        this.image.src = "./img/pngPlayer/_Idle_right.png";
      } else if (this.velocity.x == 0 && this.velocity.y == 0 && lastkey == "a") {
        this.framesMax = 10;

        this.image.src = "./img/pngPlayer/_Idle_left.png";
      }

      if (keys.d.pressed && lastkey == "d") {
        this.framesMax = 10;

        this.image.src = "./img/pngPlayer/_Run_right.png";
      } else if (keys.a.pressed && lastkey == "a") {
        this.framesMax = 10;

        this.image.src = "./img/pngPlayer/_Run_left.png";
      } else if (keys.s.pressed) {
        this.framesMax = 10;
        this.image.src = "./img/pngPlayer/_Run_right.png";
      } else if (keys.w.pressed) {
        this.framesMax = 10;
        this.image.src = "./img/pngPlayer/_Run_left.png";
      }
    }
  }

  update() {
    this.draw();

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (player.exp > player.requiredXP) {
      player.lvl += 1;
      player.requiredXP += player.requiredXP * 2;
      console.log(player.requiredXP);
      lvlPick.innerHTML = `LVL <div class="align-under-stats">${player.lvl}</div>`;
    }

    if (!player.health) {
      player.alive = false;
      player.velocity.x = 0;
    } else if (!lives) {
      player.alive = false;
      player.velocity.x = 0;
    }

    if (!player.alive) {
      if (!revive) {
        setTimeout(() => {
          player.alive = true;

          lives -= 1;
          livesPick.innerHTML = `LIVES <div class="align-under-stats">${lives}</div>`;
          player.health = 100;
          player.position.x = 0;
          player.position.y = 0;
          revive = false;
        }, 5000);
        revive = true;
      }
    }

    healthPick.innerHTML = `HEALTH <div class="align-under-stats">${this.health}</div>`;
    if (!player.alive) {
      player.framesMax = 10;

      this.alignX = 13;

      player.image.src = "./img/pngPlayer/_Death.png";

      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent++;
      }
    }
    if (!keys.d.pressed && !keys.a.pressed && player.alive) {
      this.framesElapsed++;
      if (this.framesElapsed % this.framesHold === 0) {
        if (this.framesCurrent < this.framesMax - 1) {
          this.framesCurrent++;
        } else {
          this.framesCurrent = 0;
        }
      }
    }
    if (player.alive && keys.d.pressed && lastkey == "d") {
      this.framesElapsed++;
      if (this.framesElapsed % this.framesHold === 0) {
        if (this.framesCurrent < this.framesMax - 1) {
          this.framesCurrent++;
        } else {
          this.framesCurrent = 0;
        }
      }
    } else if (player.alive && keys.a.pressed && lastkey == "a") {
      this.framesElapsed++;
      if (this.framesElapsed % this.framesHold === 0) {
        if (this.framesCurrent <= 10 && this.framesCurrent > 0) {
          this.framesCurrent--;
        } else {
          this.framesCurrent = 9;
        }
      }
    }

    // if (player.position.x + player.width > canvas.width + 15000) {
    //   keys.d.pressed = false;
    //   player.velocity.x = 0;
    // } else if (player.position.x < 0) {
    //   keys.a.pressed = false;
    //   player.velocity.x = 0;
    // }
    //Колизия с краем экрана
  }
}

const player = new Sprite({
  position: {
    x: 320,
    y: 152,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  width: 35,
  height: 53,
  color: "black",

  scale: 1.2,
  imageSrc: "",
  health: 100,
  exp: 0,
  lvl: 1,
  requiredXP: 50,
  alignX: 40,
  alignY: 37,
});
