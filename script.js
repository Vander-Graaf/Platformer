const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const jumpSound = new Audio('sounds/jump.mp3')
jumpSound.volume = 0.1

canvas.width = 1024;
canvas.height = 576;


c.fillRect(0, 0, canvas.width, canvas.height)


const gravity = 0.2

class Sprite {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
        this.height = 150
    }

    draw() {
        c.fillStyle = "red"
        c.fillRect(this.position.x, this.position.y, 50, this.height)
    }

    update() {
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        } else {
            this.velocity.y += gravity
         
        }
    }


}

const player = new Sprite({
    position: {
    x: 0,
    y: 0
    },
    velocity: {
    x: 0,
    y: 0
    }
})



const enemy = new Sprite({
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
    enemy.update()


    player.velocity.x = 0




    if (keys.a.pressed && lastkey === 'a') {
        player.velocity.x = -3
    } else if (keys.d.pressed  && lastkey === 'd') {
        player.velocity.x = 3
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
        jumpSound.pause()
        jumpSound.currentTime = 0;
        jumpSound.play()
        player.velocity.y = - 10
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






