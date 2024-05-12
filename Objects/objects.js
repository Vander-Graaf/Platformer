const healthBar = new HealthBar({
  position: {
    x: null,
    y: null,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  width: 35,
  height: 5,
  color: "red",
  scale: 1.4,
  imageSrc: "",
  health: 100,
  alignX: 42,
  alignY: 42,
});

const livesBar = new Lives({
  position: {
    x: 100,
    y: 100,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  width: 35,
  height: 35,
  color: "black",
  scale: 0.4,
  framesCurrent: 0,
  imageSrc: "./img/Heart.png",
  alignX: 0,
  alignY: 0,
});

let grasses = [];
let randomTile = Math.random();
let Xposition = 1;
let Yposition = 1;
let limit = 100;
for (let i = 1; i <= 4500; i++) {
  randomTile = Math.random();

  Xposition += 1;
  if (Xposition > limit) {
    Yposition += 1;
    Xposition = 0;
    limit = 100;
  }

  const grass = new Background({
    position: {
      x: (Xposition - 1) * 40 - 500,
      y: (Yposition - 1) * 40 - 500,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    width: 40,
    height: 40,
    color: "black",
    imageSrc: "./img/Grass.png",
    framesMax: 3,
    framesCurrent: 1,
    framesCurrentColumn: 0,
    scale: 0.5,
  });

  if (randomTile < 0.1) {
    grass.framesCurrent = 0;
    grass.framesCurrentColumn = 0;
  } else if (randomTile < 0.2) {
    grass.framesCurrent = 1;
    grass.framesCurrentColumn = 0;
  } else if (randomTile < 0.3) {
    grass.framesCurrent = 2;
    grass.framesCurrentColumn = 0;
  } else if (randomTile < 0.4) {
    grass.framesCurrent = 0;
    grass.framesCurrentColumn = 1;
  } else if (randomTile < 0.5) {
    grass.framesCurrent = 1;
    grass.framesCurrentColumn = 1;
  } else if (randomTile < 0.6) {
    grass.framesCurrent = 2;
    grass.framesCurrentColumn = 1;
  } else if (randomTile < 0.7) {
    grass.framesCurrent = 0;
    grass.framesCurrentColumn = 2;
  } else if (randomTile < 0.8) {
    grass.framesCurrent = 1;
    grass.framesCurrentColumn = 2;
  } else if (randomTile < 0.9) {
    grass.framesCurrent = 2;
    grass.framesCurrentColumn = 2;
  }

  grasses.push(grass);
}
