


const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const jumpSound = new Audio('sounds/jump.mp3')
const xCoord = document.querySelector('.x-coordinate')
const yCoord = document.querySelector('.y-coordinate')
const xVelocity = document.querySelector('.x-velocity')
const yVelocity = document.querySelector('.y-velocity')
jumpSound.volume = 0.01

canvas.width = 1024
canvas.height = 576
CanvasPositionX = 0
onGround = false



c.fillRect(0, 0, canvas.width, canvas.height)


const gravity = 1
let acceleration = 1
let index = 0
let lives = 3
let touchingWall = false
let lastkey


class Sprite {
    constructor({position, velocity, height , width, color, imageSrc}) {
        this.position = position
        this.velocity = velocity
        this.height = height
        this.width = width
        this.color = color 
        this.image = new Image()
        this.image.src = imageSrc
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, 50, 50)
    
    }

    update() {
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y


        //Колизия с краем экрана
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
       
        } else if (this.position.y <= 0) {
            keys.w.pressed = false
            this.velocity.y = 5
        } else {
            this.velocity.y += gravity
        }


        if (player.position.x + player.width > canvas.width) {
            keys.d.pressed = false
            player.velocity.x = 0
        } else if (player.position.x < 0) {
            keys.a.pressed = false
            player.velocity.x = 0
        } 
        //Колизия с краем экрана



    }
}




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
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

update() {
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y






 if (  // левая коллизия
    player.position.y + player.height > this.position.y  
    && this.position.y + this.height  > player.position.y + 15
    && player.position.x  <= this.position.x 
    && player.position.x + player.width >= this.position.x 
    ){
     player.position.x = this.position.x - 1 - player.width
    }  
 
 else if (   // правая коллизия
         player.position.y + player.height > this.position.y 
         && this.position.y + this.height > player.position.y + 15
         && player.position.x < this.position.x + this.width 
         && player.position.x + player.width   > this.position.x 
         ){
         player.position.x = this.position.x + 1 + this.width
         }   
        
else if ( //Вверхняя коллизия
        player.position.y + player.height + player.velocity.y > this.position.y
        && this.position.y + this.height -1 > player.position.y + 15
        && player.position.x + player.width   > this.position.x 
        && player.position.x < this.position.x + this.width
        ){
        onGround = true
        player.velocity.y = 0
        }

        
else if ( //Нижняя колизия
        player.position.y + player.height + player.velocity.y > this.position.y
        && this.position.y + this.height + 5 > player.position.y
        && player.position.x + player.width   > this.position.x 
        && player.position.x < this.position.x + this.width
        ){
         player.position.y = this.position.y + 6 + this.height
         player.velocity.y = 2
        }
     

    

        
        
 
  
    }
}

// блоки 








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

    player.update()

  

    player.velocity.x = 0


//Управление
    if (keys.w.pressed && onGround) {
        onGround = false
        player.velocity.y = - 20
        jumpSound.pause()
        jumpSound.currentTime = 0;
        jumpSound.play()
        }
  
    if (keys.a.pressed && lastkey === 'a' ) {
        player.velocity.x = -5
     } else if (keys.d.pressed  && lastkey === 'd' ) {
         player.velocity.x = 5
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

    


























