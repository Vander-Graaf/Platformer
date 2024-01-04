


const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

const jumpSound = new Audio('sounds/jump.mp3')
const bumpSound = new Audio('sounds/bump.wav')
const coinSound = new Audio('sounds/coin.wav')
jumpSound.volume = 0.006
bumpSound.volume = 0.09
coinSound.volume = 0.09

const xCoord = document.querySelector('.x-coordinate')
const yCoord = document.querySelector('.y-coordinate')
const xVelocity = document.querySelector('.x-velocity')
const yVelocity = document.querySelector('.y-velocity')

const scorePick = document.querySelector('.score')
const coinsPick = document.querySelector('.coins')
const worldPick = document.querySelector('.world')
const timePick = document.querySelector('.time')
const livesPick = document.querySelector('.lives')
let lives = 3
let score = 0
let time = 400
let coins = 0

setInterval(() => {
    time -= 1
    timePick.innerHTML = `TIME <div class="align-under-stats">${time}</div>`
}, 1000);



canvas.width = 1024
canvas.height = 576
CanvasPositionX = 0
onGround = false



c.fillRect(0, 0, canvas.width, canvas.height)


const gravity = 0.4
let acceleration = 1
let index = 0


let touchingWall = false
let lastkey = 'd'











const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    },
    arrowup: {
        pressed: false 
    },
    arrowleft: {
        pressed: false 
    },
    arrowright: {
        pressed: false 
    },
    arrowdown: {
        pressed: false 
    },
}




function animate() {
    window.requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    

    Box1.update()
    Box2.update()
    Box3.update()
    Box4.update()
    Box5.update()
    Box6.update()
    coin1.update()
    coin2.update()

    player.update()
   
  

    player.velocity.x = 0


//Управление
    if (keys.w.pressed && onGround) {
        onGround = false
        player.velocity.y = - 11
        jumpSound.pause()
        jumpSound.currentTime = 0;
        jumpSound.play()
        }
  
    if (keys.a.pressed && lastkey === 'a' ) {
        player.velocity.x = -4
     } else if (keys.d.pressed  && lastkey === 'd' ) {
         player.velocity.x = 4
     }
//Управление





   xVelocity.textContent = `x-velocity: ${player.velocity.x}`
   yCoord.textContent = `y: ${player.position.y}`
   xCoord.textContent = `x: ${player.position.x}`
   yVelocity.textContent = `y-velocity: ${player.velocity.y}`
   
}





window.addEventListener('keydown', (event) => {
 switch (event.key) {
    case 'd':
    keys.d.pressed = true
    lastkey = 'd'
 break
    case 'a':
    keys.a.pressed = true
    lastkey = 'a'
 break
    case 'w':
    keys.w.pressed = true 
 break

 
}
})


window.addEventListener('keyup', (event) => {
 switch (event.key) {
    case 'd':
    keys.d.pressed = false
    player.velocity.x = 0


 break
    case 'a':
    keys.a.pressed = false
    player.velocity.x = 0
    
 break
 case 'w':
    keys.w.pressed = false
 break
    }
    })

    animate()

    


























