const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const jumpSound = new Audio('sounds/jump.mp3')
jumpSound.volume = 0.1

canvas.width = 1024;
canvas.height = 576;
CanvasPositionX = 0


c.fillRect(0, 0, canvas.width, canvas.height)


const gravity = 0.4

class Sprite {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
        this.height = 100
        this.width = 50
    }

    draw() {
        c.fillStyle = "green"
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
        } else if (this.position.x < 0) {
            keys.a.pressed = false
        }
   


    }


}

const player = new Sprite({
    position: {
    x: 400,
    y: 0
    },
    velocity: {
    x: 0,
    y: 0
    }
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
  
    player.velocity.x = 0



 

    if (keys.a.pressed && lastkey === 'a') {
        player.velocity.x = -7
    } else if (keys.d.pressed  && lastkey === 'd') {
        player.velocity.x = 7
    }

    if (player.position.y + player.height >= 576 && keys.w.pressed) {
        player.velocity.y = - 10
        jumpSound.pause()
        jumpSound.currentTime = 0;
        jumpSound.play()
        }
   
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
 break
    case 'a':
    keys.a.pressed = false
 break
 case 'w':
    keys.w.pressed = false
 break
    }
    })






