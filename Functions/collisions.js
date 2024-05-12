function checkCollisionIfAlive(first, second, left, right, top, bottom) {
  if (
    // левая коллизия
    first.position.y + first.height > second.position.y &&
    second.position.y + second.height > first.position.y + 15 &&
    first.position.x <= second.position.x &&
    first.position.x + first.width >= second.position.x
  ) {
    left(first, second);
  } else if (
    // правая коллизия
    first.position.y + first.height > second.position.y &&
    second.position.y + second.height > first.position.y + 15 &&
    first.position.x < second.position.x + second.width &&
    first.position.x + first.width > second.position.x
  ) {
    right(first, second);
  } else if (
    //Верхняя коллизия
    first.position.y + first.height + first.velocity.y > second.position.y &&
    second.position.y + second.height - 1 > first.position.y + 15 &&
    first.position.x + first.width > second.position.x &&
    first.position.x < second.position.x + second.width
  ) {
    top(first, second);
  } else if (
    //Нижняя колизия
    first.position.y + first.height + first.velocity.y > second.position.y &&
    second.position.y + second.height > first.position.y &&
    first.position.x + first.width > second.position.x &&
    first.position.x < second.position.x + second.width
  ) {
    bottom(first, second);
  }
}

function checkCollision(first, second, left, right, top, bottom) {
  if (
    // левая коллизия
    first.position.y + first.height > second.position.y &&
    second.position.y + second.height > first.position.y + 15 &&
    first.position.x <= second.position.x &&
    first.position.x + first.width >= second.position.x
  ) {
    left(first, second);
  } else if (
    // правая коллизия
    first.position.y + first.height > second.position.y &&
    second.position.y + second.height > first.position.y + 15 &&
    first.position.x < second.position.x + second.width &&
    first.position.x + first.width > second.position.x
  ) {
    right(first, second);
  } else if (
    //Верхняя коллизия
    first.position.y + first.height + first.velocity.y > second.position.y &&
    second.position.y + second.height - 1 > first.position.y + 15 &&
    first.position.x + first.width > second.position.x &&
    first.position.x < second.position.x + second.width
  ) {
    top(first, second);
  } else if (
    //Нижняя колизия
    first.position.y + first.height + first.velocity.y > second.position.y &&
    second.position.y + second.height + 5 > first.position.y &&
    first.position.x + first.width > second.position.x &&
    first.position.x < second.position.x + second.width
  ) {
    bottom(first, second);
  }
}

function PlayerDamage() {
  if (!player.isHitted && player.health) {
    player.isHitted = true;
    player.health -= 20;
    setTimeout(() => {
      player.isHitted = false;
    }, 500);
  }
}
