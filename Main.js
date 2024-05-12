const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
c.webkitImageSmoothingEnabled = false;
c.mozImageSmoothingEnabled = false;
c.imageSmoothingEnabled = false;
//const jumpSound = new Audio("sounds/jump.mp3");
//jumpSound.volume = 0.006;
//const xCoord = document.querySelector(".x-coordinate");
//const yCoord = document.querySelector(".y-coordinate");
//const xVelocity = document.querySelector(".x-velocity");
//const yVelocity = document.querySelector(".y-velocity");

const expPick = document.querySelector(".exp");
const lvlPick = document.querySelector(".lvl");

const healthPick = document.querySelector(".health");
const timePick = document.querySelector(".time");
const livesPick = document.querySelector(".lives");
let lives = 3;
let score = 0;
let time = 0;

setInterval(() => {
  time += 1;
  timePick.innerHTML = `TIME <div class="align-under-stats">${time}</div>`;
}, 1000);

canvas.width = 1390;
canvas.height = 850;
CanvasPositionX = 0;
coinTime = true;

c.fillRect(0, 0, canvas.width, canvas.height);

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
  s: {
    pressed: false,
  },
};
let lastkey = "d";

let cameraX = 0;
let cameraY = 0;

let isPaused = false;
function togglePause() {
  isPaused = !isPaused;
  if (isPaused) {
    upgradeCards.style.display = "flex";
  } else if (!isPaused) {
    upgradeCards.style.display = "none";
  }
}

function animate() {
  window.requestAnimationFrame(animate);
  if (!isPaused) {
    c.clearRect(-15000, 0, canvas.width + 15000, canvas.height - 10000);

    c.translate(-cameraX, -cameraY);

    updateCanvas();

    SetCamera(player.position.x - 650, player.position.y - 320);

    movement();
  }
}
controls();

animate();
