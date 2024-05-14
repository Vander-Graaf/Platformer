function updateCanvas() {
  for (let i = 1; i <= grasses.length; i++) {
    grasses[i - 1].update();
  }

  for (let i = 0; i < skeletons.length - 1; i++) {
    if (!skeletons[i]) {
      skeletons[i] = new Enemy({
        position: {
          x: player.position.x,
          y: player.position.y - 500,
        },
        velocity: {
          x: 0,
          y: 0,
        },
        width: 40,
        height: 50,
        health: 100,
        color: "gold",
        scale: 1.6,
        alive: true,
        givenXP: false,
        framesMax: 12,
        framesHold: 3,
        alignX: 8,
        alignY: 10,
        imageSrc: "./img/Skeleton enemy/Skeleton enemy.png",
      });
      // console.log(skeletons[i]);
    }
  }

  for (let i = 0; i <= skeletons.length - 1; i++) {
    // console.log(skeletons[i]);
    if (skeletons[i]) {
      skeletons[i].update();

      for (let j = 0; j <= Smites.length - 1; j++) {
        Smites[j].update();
      }
    }

    if (skeletons[i]) {
      if (skeletons[i].alive === false) {
        skeletons[i] = null;
      }
    }
  }

  healthBar.update();

  //spear.update();
  scythe.update();
  player.update();

  for (let i = 0; i <= FireMissles.length - 1; i++) {
    FireMissles[i].update();
  }

  //livesBar.update();
}
