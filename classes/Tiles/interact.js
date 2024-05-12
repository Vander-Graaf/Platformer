// Интерактивные обьекты
class Interact {
  constructor({
    position,
    velocity,
    height,
    width,
    color,
    imageSrc,
    scale = 0.079,
    framesMax = 4,
    type,
    framesHold,
  }) {
    this.position = position;
    this.velocity = velocity;
    this.height = height;
    this.width = width;
    this.color = color;
    this.type = type;
    this.image = new Image();
    this.image.src = imageSrc;
    this.scale = scale;
    this.framesMax = framesMax;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = framesHold;
  }

  draw() {
    // c.fillStyle = this.color
    // c.fillRect(this.position.x, this.position.y, this.width, this.height)

    c.drawImage(
      this.image,
      this.framesCurrent * (this.image.width / this.framesMax),
      0,
      this.image.width / this.framesMax,
      this.image.height,
      this.position.x,
      this.position.y,
      (this.image.width / this.framesMax) * this.scale,
      this.image.height * this.scale
    );
  }

  update() {
    this.draw();

    this.framesElapsed++;
    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent++;
      } else {
        this.framesCurrent = 0;
      }
    }

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // проверка коллизии игрока с блоками
    checkCollisionIfAlive(
      player,
      this,
      // левая коллизия
      (first, second) => {
        if (second.type == "Coin") {
          second.position.y = 1000000;
          coins += 1;
          coinsPick.innerHTML = `COINS <div class="align-under-stats">${coins}</div>`;
          coinSound.pause();
          coinSound.currentTime = 0;
          coinSound.play();
        } else if (second.type == "luckyblock") {
          first.position.x = second.position.x - 1 - first.width;
        }
      },
      // правая коллизия
      (first, second) => {
        if (second.type == "Coin") {
          second.position.x = 1000000;
          coins += 1;
          coinsPick.innerHTML = `COINS <div class="align-under-stats">${coins}</div>`;
          coinSound.pause();
          coinSound.currentTime = 0;
          coinSound.play();
        } else if (second.type == "luckyblock") {
          first.position.x = second.position.x + 1 + second.width;
        }
      },
      //верхняя коллизия
      (first, second) => {
        if (first.type == "Coin") {
          second.position.x = 1000000;
          coins += 1;
          coinsPick.innerHTML = `COINS <div class="align-under-stats">${coins}</div>`;
          coinSound.pause();
          coinSound.currentTime = 0;
          coinSound.play();
        } else if (second.type == "luckyblock") {
          onGround = true;
          first.position.y = second.position.y - second.height;
          first.velocity.y = 0;
        }
      },
      //нижняя колизия
      (first, second) => {
        if (second.type === "Coin") {
          second.position.x = 1000000;
          coins += 1;
          coinsPick.innerHTML = `COINS <div class="align-under-stats">${coins}</div>`;
          coinSound.pause();
          coinSound.currentTime = 0;
          coinSound.play();
        } else if (second.type == "luckyblock") {
          first.position.y = second.position.y + 6 + second.height;
          first.velocity.y = 2;
        }
      }
    );
  }
}
// Интерактивные обьекты
