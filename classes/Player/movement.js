function movement() {
  //Управление
  if (player.alive) {
    if (keys.a.pressed && lastkey === "a") {
      player.velocity.x = -3;
    } else if (keys.d.pressed && lastkey === "d") {
      player.velocity.x = 3;
    } else if (keys.s.pressed) {
      player.velocity.y = 3;
    } else if (keys.w.pressed) {
      player.velocity.y = -3;
    }
  }

  if (player.alive) {
    if (keys.a.pressed && keys.s.pressed && lastkey === "a") {
      player.velocity.x = -3;
      player.velocity.y = 3;
    } else if (keys.d.pressed && keys.s.pressed && lastkey === "d") {
      player.velocity.x = 3;
      player.velocity.y = 3;
    } else if (keys.a.pressed && keys.w.pressed && lastkey === "a") {
      player.velocity.x = -3;
      player.velocity.y = -3;
    } else if (keys.d.pressed && keys.w.pressed && lastkey === "d") {
      player.velocity.x = 3;
      player.velocity.y = -3;
    }
  }

  //Управление
}
