function updateCanvas() {
  for (let i = 1; i <= grasses.length; i++) {
    grasses[i - 1].update();
  }

  for (let i = 0; i <= skeletons.length - 1; i++) {
    skeletons[i] = null;
    if (skeletons[i]) {
      skeletons[i].update();
      for (let i = 0; i <= Smites.length - 1; i++) {
        Smites[i].update();
      }
    }
  }

  healthBar.update();
  spear.update();
  player.update();

  for (let i = 0; i <= FireMissles.length - 1; i++) {
    FireMissles[i].update();
  }

  //livesBar.update();
}
