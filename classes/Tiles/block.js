// блоки
class Block {
  constructor({ position, velocity, height, width, color, imageSrc, scale = 0.08 }) {
    this.position = position;
    this.velocity = velocity;
    this.height = height;
    this.width = width;
    this.color = color;
    this.image = new Image();
    this.image.src = imageSrc;
    this.scale = scale;
  }

  draw() {
    c.fillStyle = this.color;
    c.fillRect(this.position.x, this.position.y, this.width, this.height);

    c.drawImage(
      this.image,
      0,
      0,
      this.image.width / 1,
      this.image.height / 1,
      this.position.x,
      this.position.y,
      (this.image.width / 1) * this.scale,
      (this.image.height / 1) * this.scale
    );
  }

  update() {
    this.draw();

    // проверка коллизии игрока с блоками
    checkCollisionIfAlive(
      player,
      this,

      // левая коллизия
      (first, second) => {
        first.position.x = second.position.x - 1 - first.width;
      },
      // правая коллизия
      (first, second) => {
        first.position.x = second.position.x + 1 + second.width;
      },
      //верхняя коллизия
      (first, second) => {
        onGround = true;
        first.position.y = second.position.y - first.height;
        first.velocity.y = 0;
      },
      //нижняя колизия
      (first, second) => {
        first.position.y = second.position.y + 6 + second.height;
        first.velocity.y = 2;
        bumpSound.pause();
        bumpSound.currentTime = 0;
        bumpSound.play();
      }
    );

    checkCollision(
      gumba1,
      this,
      // левая коллизия
      (first, second) => {
        first.position.x = second.position.x - 1 - first.width;
      },
      // правая коллизия
      (first, second) => {
        first.position.x = second.position.x + 1 + second.width;
      },
      //верхняя коллизия
      (first, second) => {
        first.position.y = second.position.y - 6 - first.height;
      },
      //нижняя колизия
      (first, second) => {
        first.position.y = second.position.y + 6 + second.height;
      }
    );
  }
}
// блоки
