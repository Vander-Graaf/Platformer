const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const jumpSound = new Audio('sounds/jump.mp3')
const xCoord = document.querySelector('.x-coordinate')
const yCoord = document.querySelector('.y-coordinate')
jumpSound.volume = 0.01

canvas.width = 1024;
canvas.height = 576;
CanvasPositionX = 0
onGround = false



c.fillRect(0, 0, canvas.width, canvas.height)


const gravity = 1
const acceleration = 1



// игрок и его управление 

class Sprite {
    constructor({position, velocity, height , width, color}) {
        this.position = position
        this.velocity = velocity
        this.height = height
        this.width = width
        this.color = color 
    }

    draw() {
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y


        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        } else if (this.position.y <= 0) {
            keys.w.pressed = false
            this.velocity.y = 1
        } else {
            this.velocity.y += gravity
        }


        if (this.position.x + this.width > canvas.width) {
            keys.d.pressed = false
            player.velocity.x = 0
        } else if (this.position.x < 0) {
            keys.a.pressed = false
            player.velocity.x = 0
        } else {
          
        }


    



    }
}

const player = new Sprite({
    position: {
    x: 400,
    y: 100
    },
    velocity: {
    x: 0,
    y: 0
    },
    width: 50, height: 90, color: 'grey'
})


const Brick = new Sprite({
    position: {
    x: 200,
    y: 0
    },
    velocity: {
    x: 0,
    y: 0
    },  
    width: 50, height: 50, color: 'brown'
})







const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    }
}


let lastkey

function animate() {
    window.requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
    Brick.update()
  
    player.velocity.x = 0
    Brick.velocity.x = 0

  
    
   

    if (keys.a.pressed && lastkey === 'a') {
        player.velocity.x = -3
        if (player.position.y + player.height > Brick.position.y && player.position.x < Brick.position.x + Brick.width && player.position.x + player.width > Brick.position.x ){
            player.velocity.x = -1
            Brick.velocity.x = -1
        }
    } else if (keys.d.pressed  && lastkey === 'd') {
        player.velocity.x = 3
        if (player.position.y + player.height > Brick.position.y && player.position.x + player.width + 3 > Brick.position.x && player.position.x + player.width  < Brick.position.x + Brick.width ){
            player.velocity.x = 1
            Brick.velocity.x = 1
        }
      
    }

    if (player.position.y + player.height + player.velocity.y > Brick.position.y
        && 
        player.position.x + player.width  > Brick.position.x && player.position.x < Brick.position.x + Brick.width 

        ){
        onGround = true
        player.velocity.y = 0
    }
    
    if (player.position.y + player.height >= 576) {
        onGround = true
    }



      
 

    if (keys.w.pressed && onGround) {
        onGround = false
        player.velocity.y = - 20
        jumpSound.pause()
        jumpSound.currentTime = 0;
        jumpSound.play()
        }

   yCoord.textContent = `y: ${player.position.y}`
   xCoord.textContent = `x: ${player.position.x}`
}

animate()



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

// игрок и его управление 




























// блоки 
class Block {
    constructor({position, velocity, height , width, color}) {
        this.position = position
        this.velocity = velocity
        this.height = height
        this.width = width
        this.color = color 
    }

    draw() {
        c.fillStyle = "red"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
  
}
// блоки 




