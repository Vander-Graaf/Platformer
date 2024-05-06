const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

const jumpSound = new Audio("sounds/jump.mp3");
const bumpSound = new Audio("sounds/bump.wav");
const coinSound = new Audio("sounds/coin.wav");
const stompSound = new Audio("sounds/stomp.wav");
const mariodieSound = new Audio("sounds/mariodie.wav");
jumpSound.volume = 0.006;
bumpSound.volume = 0.09;
coinSound.volume = 0.09;
stompSound.volume = 0.09;
mariodieSound.volume = 0.09;

const xCoord = document.querySelector(".x-coordinate");
const yCoord = document.querySelector(".y-coordinate");
const xVelocity = document.querySelector(".x-velocity");
const yVelocity = document.querySelector(".y-velocity");

const scorePick = document.querySelector(".score");
const coinsPick = document.querySelector(".coins");
const worldPick = document.querySelector(".world");
const timePick = document.querySelector(".time");
const livesPick = document.querySelector(".lives");
let lives = 3;
let score = 0;
let time = 400;
let coins = 0;

setInterval(() => {
  time -= 1;
  timePick.innerHTML = `TIME <div class="align-under-stats">${time}</div>`;
}, 1000);

canvas.width = 1390;
canvas.height = 850;
CanvasPositionX = 0;
onGround = false;
GumbaOnGround = false;
coinTime = true;

c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.4;

let acceleration = 5;
let index = 0;
let touchingWall = false;
let lastkey = "d";

let lastKeyGumba = "d";

const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  w: {
    pressed: false,
  },
};

const keysGumba = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  w: {
    pressed: false,
  },
};

let cameraX = 0;
let cameraY = 0;

function animate() {
  window.requestAnimationFrame(animate);

  c.clearRect(-1000, 0, canvas.width + 15000, canvas.height - 100);
  c.translate(-cameraX, -cameraY);

  mountain1.update();
  cloud1.update();
  cloud2.update();
  bush1.update();
  bush2.update();
  luckyblock1.update();

  for (let i = 1; i <= 750; i++) {
    floors[i - 1].update();
  }

  Box1.update();
  Box3.update();
  Box4.update();
  Box5.update();
  Box6.update();
  Box7.update();
  Box8.update();
  Box9.update();
  Box10.update();
  coin1.update();
  coin2.update();
  gumba1.update();

  player.update();

  function updateCameraPosition(x, y) {
    cameraX = x;
    cameraY = y;

    c.setTransform(1, 0, 0, 1, -cameraX, -cameraY);
  }

  // Example usage:
  updateCameraPosition(player.position.x - 600, -25);
  player.velocity.x = 0;
  cameraX = player.velocity.x;

  cameraX = 0;

  gumba1.velocity.x = 0;

  if (player.alive === false) {
    setTimeout(() => {
      player.alive = true;
      player.position.x = 300;
      player.position.y = 452;
    }, 3000);
  }

  //Управление
  if (player.alive) {
    if (keys.w.pressed && onGround) {
      onGround = false;
      player.velocity.y = -11;
      jumpSound.pause();
      jumpSound.currentTime = 0;
      jumpSound.play();
    }

    if (keys.a.pressed && lastkey === "a") {
      player.velocity.x = -6;
    } else if (keys.d.pressed && lastkey === "d") {
      player.velocity.x = 6;
    }

    if (player.velocity.x > 0) {
      cameraX = 6;
    } else if (player.velocity.x < 0) {
      cameraX = -6;
    }

    if (keysGumba.w.pressed && GumbaOnGround) {
      GumbaOnGround = false;
      gumba1.velocity.y = -8;
      jumpSound.pause();
      jumpSound.currentTime = 0;
      jumpSound.play();
    }

    if (keysGumba.a.pressed && lastKeyGumba === "a") {
      gumba1.velocity.x = -6.5;
    } else if (keysGumba.d.pressed && lastKeyGumba === "d") {
      gumba1.velocity.x = 6.6;
    }
  }

  //Управление

  xVelocity.textContent = `x-velocity: ${player.velocity.x}`;
  yCoord.textContent = `y: ${player.position.y}`;
  xCoord.textContent = `x: ${player.position.x}`;
  yVelocity.textContent = `y-velocity: ${player.velocity.y}`;
}

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    keysGumba.d.pressed = true;
    lastKeyGumba = "d";
  } else if (event.key === "ArrowLeft") {
    keysGumba.a.pressed = true;
    lastKeyGumba = "a";
  } else if (event.key === "ArrowUp") {
    keysGumba.w.pressed = true;
  }
});
window.addEventListener("keyup", (event) => {
  if (event.key === "ArrowRight") {
    keysGumba.d.pressed = false;
    gumba1.velocity.x = 0;
  } else if (event.key === "ArrowLeft") {
    keysGumba.a.pressed = false;
    gumba1.velocity.x = 0;
  } else if (event.key === "ArrowUp") {
    keysGumba.w.pressed = false;
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "d" || event.key === "D" || event.key === "в" || event.key === "В") {
    keys.d.pressed = true;
    lastkey = "d";
  } else if (event.key === "a" || event.key === "A" || event.key === "ф" || event.key === "Ф") {
    keys.a.pressed = true;
    lastkey = "a";
  } else if (event.key === "w" || event.key === "W" || event.key === "ц" || event.key === "Ц") {
    keys.w.pressed = true;
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
  }
});

animate();
