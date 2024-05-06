const player = new Sprite({
  position: {
    x: 320,
    y: 152,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  width: 35,
  height: 38,
  color: "gold",
  imageSrc: "",
});

const gumba1 = new Enemy({
  position: {
    x: 700,
    y: 50,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  width: 38,
  height: 38,
  color: "gold",
  imageSrc: "./img/gumba-walk.png",
});

const Box1 = new Block({
  position: {
    x: 160,
    y: 350,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  width: 40,
  height: 40,
  color: "black",
  imageSrc: "./img/brick.png",
});

const Box3 = new Block({
  position: {
    x: 200,
    y: 350,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  width: 40,
  height: 40,
  color: "black",
  imageSrc: "./img/brick.png",
});

const Box4 = new Block({
  position: {
    x: 600,
    y: 450,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  width: 40,
  height: 40,
  color: "black",
  imageSrc: "./img/brick.png",
});

const Box5 = new Block({
  position: {
    x: 800,
    y: 450,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  width: 40,
  height: 40,
  color: "black",
  imageSrc: "./img/brick.png",
});

const Box6 = new Block({
  position: {
    x: 760,
    y: 260,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  width: 40,
  height: 40,
  color: "black",
  imageSrc: "./img/brick.png",
});

const Box7 = new Block({
  position: {
    x: 480,
    y: 310,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  width: 40,
  height: 40,
  color: "black",
  imageSrc: "./img/brick.png",
});

const Box8 = new Block({
  position: {
    x: 240,
    y: 350,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  width: 40,
  height: 40,
  color: "black",
  imageSrc: "./img/brick.png",
});

const Box9 = new Block({
  position: {
    x: 960,
    y: 350,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  width: 40,
  height: 40,
  color: "black",
  imageSrc: "./img/brick.png",
});

const Box10 = new Block({
  position: {
    x: 1000,
    y: 350,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  width: 40,
  height: 40,
  color: "black",
  imageSrc: "./img/brick.png",
});

const coin1 = new Interact({
  position: {
    x: 600,
    y: 220,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  width: 40,
  height: 40,
  color: "black",
  type: "Coin",
  imageSrc: "./img/coin.png",
  framesHold: 15,
});

const coin2 = new Interact({
  position: {
    x: 100,
    y: 220,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  width: 40,
  height: 40,
  color: "black",
  type: "Coin",
  imageSrc: "./img/coin.png",
  framesHold: 15,
});

const luckyblock1 = new Interact({
  position: {
    x: 400,
    y: 350,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  width: 40,
  height: 40,
  color: "black",
  type: "luckyblock",
  imageSrc: "./img/luckyblock.png",
  framesHold: 18,
  scale: 0.08,
});

const cloud1 = new Background({
  position: {
    x: 420,
    y: 120,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  width: 40,
  height: 40,
  color: "black",
  imageSrc: "./img/cloud.png",
  scale: 0.1,
});

const cloud2 = new Background({
  position: {
    x: 920,
    y: 180,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  width: 40,
  height: 40,
  color: "black",
  imageSrc: "./img/cloud.png",
  scale: 0.1,
});

const bush1 = new Background({
  position: {
    x: 260,
    y: 445,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  width: 40,
  height: 40,
  color: "black",
  imageSrc: "./img/bush.png",
  scale: 0.09,
});

const bush2 = new Background({
  position: {
    x: 860,
    y: 445,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  width: 40,
  height: 40,
  color: "black",
  imageSrc: "./img/bush.png",
  scale: 0.09,
});

const mountain1 = new Background({
  position: {
    x: 20,
    y: 420,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  width: 40,
  height: 40,
  color: "black",
  imageSrc: "./img/mountain.png",
  scale: 0.14,
});

let floors = [];
for (let i = 1; i <= 250; i++) {
  let floor = new Block({
    position: {
      x: (i - 1) * 40 - 800,
      y: 490,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    width: 40,
    height: 40,
    color: "black",
    imageSrc: "./img/floor.png",
  });
  let floor2 = new Block({
    position: {
      x: (i - 1) * 40 - 800,
      y: 530,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    width: 40,
    height: 40,
    color: "black",
    imageSrc: "./img/floor.png",
  });
  let floor3 = new Block({
    position: {
      x: (i - 1) * 40 - 800,
      y: 570,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    width: 40,
    height: 40,
    color: "black",
    imageSrc: "./img/floor.png",
  });
  floors.push(floor, floor2, floor3);
}
