function controls() {
  window.addEventListener("keydown", (event) => {
    if (event.key === "d" || event.key === "D" || event.key === "в" || event.key === "В") {
      keys.d.pressed = true;
      lastkey = "d";
    } else if (event.key === "a" || event.key === "A" || event.key === "ф" || event.key === "Ф") {
      keys.a.pressed = true;
      lastkey = "a";
    } else if (event.key === "w" || event.key === "W" || event.key === "ц" || event.key === "Ц") {
      keys.w.pressed = true;
    } else if (event.key === "s" || event.key === "S" || event.key === "ы" || event.key === "Ы") {
      keys.s.pressed = true;
    }
  });

  window.addEventListener("keyup", (event) => {
    if (event.key === "d" || event.key === "D" || event.key === "в" || event.key === "В") {
      keys.d.pressed = false;
      player.velocity.x = 0;
      cameraX = player.velocity.x;
    } else if (event.key === "a" || event.key === "A" || event.key === "ф" || event.key === "Ф") {
      keys.a.pressed = false;
      player.velocity.x = 0;
      cameraX = player.velocity.x;
    } else if (event.key === "w" || event.key === "W" || event.key === "ц" || event.key === "Ц") {
      keys.w.pressed = false;
      player.velocity.y = 0;
    } else if (event.key === "s" || event.key === "S" || event.key === "ы" || event.key === "Ы") {
      keys.s.pressed = false;
      player.velocity.y = 0;
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "p" || event.key === "P" || event.key === "з" || event.key === "З") {
      togglePause();
    }
  });
}
