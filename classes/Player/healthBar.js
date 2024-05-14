class HealthBar {
  constructor({
    position,
    velocity,
    height,
    width,
    color,
    health,
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
    this.isHitted = isHitted;
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
    c.fillStyle = "black";
    c.fillRect(this.position.x, this.position.y, 33, this.height);

    c.fillStyle = this.color;
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();
    this.position.x = player.position.x + 6;
    this.position.y = player.position.y + 80;
    this.width = player.health / 3;
  }
}

class Lives {
  constructor({
    position,
    velocity,
    height,
    width,
    color,
    health,
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
    this.isHitted = isHitted;
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
    //c.fillStyle = this.color;
    //c.fillRect(this.position.x, this.position.y, this.width, this.height);
    Animation(this);
  }

  update() {
    this.draw();

    this.position.x = player.position.x - 610;
    this.position.y = player.position.y - 320;
  }
}
