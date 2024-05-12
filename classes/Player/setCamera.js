function SetCamera(x, y) {
  cameraX = x - player.velocity.x;
  cameraY = y - player.velocity.y;

  c.setTransform(
    1,
    0,
    0,
    1,

    -cameraX,
    -cameraY
  );
  cameraX = player.velocity.x;
  cameraY = player.velocity.y;
}
