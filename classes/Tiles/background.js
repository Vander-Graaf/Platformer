// Фоновые обьекты
class Background {
  constructor({
    position,
    velocity,
    height,
    width,
    color,
    imageSrc,
    scale = 0.079,
    framesMax = 1,
    type,
    framesCurrent,
    framesMaxColumn,
    framesCurrentColumn,
    framesHold = 4,
    alive = true,
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
    this.framesMaxColumn = framesMaxColumn;
    this.framesCurrent = framesCurrent;
    this.framesCurrentColumn = framesCurrentColumn;
    this.framesElapsed = 0;
    this.framesHold = framesHold;
    this.alive = alive;
  }

  draw() {
    c.fillStyle = this.color;
    c.fillRect(this.position.x, this.position.y, this.width, this.height);

    c.drawImage(
      this.image,
      this.framesCurrent * (this.image.width / this.framesMax),
      this.framesCurrentColumn * (this.image.height / this.framesMaxColumn),

      this.image.width / this.framesMax,
      this.image.height / this.framesMaxColumn,
      this.position.x,
      this.position.y,
      (this.image.width / this.framesMax) * this.scale,

      (this.image.height / this.framesMaxColumn) * this.scale
    );
    this.framesMax = 3;
    this.framesMaxColumn = 3;
    this.framesElapsed = 0;
  }

  update() {
    this.draw();
  }
}

// Фоновые обьекты
