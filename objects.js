



class Sprite {
    constructor({
        position, velocity, height , width, 
        color, imageSrc, scale = 0.079, framesMax = 1, 
        type, framesHold = 4
     }) {
        this.position = position
        this.velocity = velocity
        this.height = height
        this.width = width
        this.color = color 
        this.type = type 
        this.image = new Image()
        this.image.src = imageSrc
        this.scale = scale
        this.framesMax = framesMax
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = framesHold
    }

    draw() {

   // c.fillStyle = this.color
   // c.fillRect(this.position.x, this.position.y, this.width, this.height)


   c.drawImage(
    this.image,
    this.framesCurrent * (this.image.width / this.framesMax),
    0,
    this.image.width / this.framesMax,
    this.image.height,
    this.position.x,
    this.position.y,
    (this.image.width / this.framesMax) * this.scale,
    this.image.height * this.scale,
   )

        this.image.src = ''

        if (player.velocity.y !== 0) {
         onGround = false
        }
         
 
        
         if (this.velocity.x == 0 && this.velocity.y == 0 && onGround && lastkey == 'd') {
         this.framesMax = 1
         this.image.src = './img/idle-right.png'
         } else if (this.velocity.x == 0 && this.velocity.y == 0 && onGround && lastkey == 'a') {
         this.framesMax = 1
         this.image.src = './img/idle-left.png'
         }
 
         if (onGround == false && lastkey == 'd' || player.velocity.y !== 0 && lastkey == 'd'){
            this.framesMax = 1
             this.image.src = './img/jump-right.png'
         } else if (onGround == false && lastkey == 'a'|| player.velocity.y !== 0 && lastkey == 'a') {
            this.framesMax = 1
             this.image.src = './img/jump-left.png'
         }
 
         if (keys.d.pressed && lastkey == 'd' && onGround) {
            this.framesMax = 3
           this.image.src = './img/run-right.png'
             
         } else if (keys.a.pressed && lastkey == 'a' && onGround) {
            this.framesMax = 3
            this.image.src = './img/run-left.png'
         } 
        
    }

    update() {
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

     
        this.framesElapsed++
        if (this.framesElapsed % this.framesHold === 0) {
            if (this.framesCurrent < this.framesMax - 1) {
                this.framesCurrent++
            } else {
                this.framesCurrent = 0
            }
        } 
      
        //Колизия с краем экрана
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
       
        }  else {
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
    constructor({position, velocity, height , width, color, imageSrc, scale = 0.080}) {
        this.position = position
        this.velocity = velocity
        this.height = height
        this.width = width
        this.color = color 
        this.image = new Image()
        this.image.src = imageSrc
        this.scale = scale
    }

    draw() {
        //c.fillStyle = this.color
        //c.fillRect(this.position.x, this.position.y, this.width, this.height)
        
        c.drawImage(
        this.image,
        0,
        0,
        this.image.width / 1,
        this.image.height / 1,
        this.position.x,
        this.position.y,
        (this.image.width / 1) * this.scale,
        (this.image.height / 1)* this.scale,
        this.image.src = './img/brick.png'
        )
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
        
else if ( //Верхняя коллизия
        player.position.y + player.height + player.velocity.y > this.position.y
        && this.position.y + this.height -1 > player.position.y + 15
        && player.position.x + player.width   > this.position.x 
        && player.position.x < this.position.x + this.width
        ){
            onGround = true
        player.position.y = this.position.y - player.height
        player.velocity.y = 0
        }

        
else if ( //Нижняя колизия
        player.position.y + player.height + player.velocity.y > this.position.y
        && this.position.y + this.height + 5 > player.position.y
        && player.position.x + player.width   > this.position.x 
        && player.position.x < this.position.x + this.width
        && player.velocity.y < 0
        ){
         player.position.y = this.position.y + 6 + this.height
         player.velocity.y = 2
         bumpSound.pause()
         bumpSound.currentTime = 0;
         bumpSound.play()
        }
    }
}

// блоки 




































// Фоновые обьекты
class Background {
    constructor({position, velocity, height , width, color, imageSrc, scale = 0.079}) {
        this.position = position
        this.velocity = velocity
        this.height = height
        this.width = width
        this.color = color 
        this.image = new Image()
        this.image.src = imageSrc
        this.scale = scale
    }

    draw() {
        //c.fillStyle = this.color
        //c.fillRect(this.position.x, this.position.y, this.width, this.height)
        
        c.drawImage(
        this.image,
        0,
        0,
        this.image.width / 1,
        this.image.height / 1,
        this.position.x,
        this.position.y,
        (this.image.width / 1) * this.scale,
        (this.image.height / 1)* this.scale,
        )
 }


    

update() {
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y


    }
}

// Фоновые обьекты




































// Интерактивные обьекты
class Interact {
    constructor({
        position, velocity, height , width, 
        color, imageSrc, scale = 0.079, framesMax = 4, 
        type, framesHold
     }) {
        this.position = position
        this.velocity = velocity
        this.height = height
        this.width = width
        this.color = color 
        this.type = type 
        this.image = new Image()
        this.image.src = imageSrc
        this.scale = scale
        this.framesMax = framesMax
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = framesHold
    }

    draw() {
       // c.fillStyle = this.color
       // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        
        c.drawImage(
        this.image,
        this.framesCurrent * (this.image.width / this.framesMax),
        0,
        this.image.width / this.framesMax,
        this.image.height,
        this.position.x,
        this.position.y,
        (this.image.width / this.framesMax) * this.scale,
        this.image.height * this.scale,
        )
    }


    
update() {
        this.draw()

           
        this.framesElapsed++
        if (this.framesElapsed % this.framesHold === 0) {
            if (this.framesCurrent < this.framesMax - 1) {
                this.framesCurrent++
            } else {
                this.framesCurrent = 0
            }
        } 
      
    

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
   

      if (  // левая коллизия
         player.position.y + player.height > this.position.y  
         && this.position.y + this.height  > player.position.y + 15
         && player.position.x  <= this.position.x 
         && player.position.x + player.width >= this.position.x 
         ){  
            if (this.type == 'Coin'){
            this.position.x = -200
            coins += 1
            coinsPick.innerHTML = `COINS <div class="align-under-stats">${coins}</div>`
            coinSound.pause()
            coinSound.currentTime = 0;
            coinSound.play()
            } else if (this.type == 'luckyblock'){
            player.position.x = this.position.x - 1 - player.width
            }
         }  
 
 else if (   // правая коллизия
         player.position.y + player.height > this.position.y 
         && this.position.y + this.height > player.position.y + 15
         && player.position.x < this.position.x + this.width 
         && player.position.x + player.width   > this.position.x 
         ){  
            if (this.type == 'Coin'){
            this.position.x = -200
            coins += 1
            coinsPick.innerHTML = `COINS <div class="align-under-stats">${coins}</div>`
            coinSound.pause()
            coinSound.currentTime = 0;
            coinSound.play()
            } else if (this.type == 'luckyblock'){
            player.position.x = this.position.x + 1 + this.width
            }
         } 
 else if ( //Верхняя коллизия
         player.position.y + player.height + player.velocity.y > this.position.y
         && this.position.y + this.height -1 > player.position.y + 15
         && player.position.x + player.width   > this.position.x 
         && player.position.x < this.position.x + this.width
         ){  
            if (this.type == 'Coin'){
            this.position.x = -200
            coins += 1
            coinsPick.innerHTML = `COINS <div class="align-under-stats">${coins}</div>`
            coinSound.pause()
            coinSound.currentTime = 0;
            coinSound.play()
            } else if (this.type == 'luckyblock'){
            onGround = true
            player.position.y = this.position.y - player.height
            player.velocity.y = 0
            }
         } 
         
 else if ( //Нижняя колизия
         player.position.y + player.height + player.velocity.y > this.position.y
         && this.position.y + this.height + 5 > player.position.y
         && player.position.x + player.width   > this.position.x 
         && player.position.x < this.position.x + this.width
         && player.velocity.y < 0
         ){  
            if (this.type === 'Coin'){
            this.position.x = -200
            coins += 1
            coinsPick.innerHTML = `COINS <div class="align-under-stats">${coins}</div>`
            coinSound.pause()
            coinSound.currentTime = 0;
            coinSound.play()
            } else if (this.type == 'luckyblock'){
            player.position.y = this.position.y + 6 + this.height
            player.velocity.y = 2
            }
         }  
    }
}
// Интерактивные обьекты




















const player = new Sprite({
    position: {
    x: 300,
    y: 452
    },
    velocity: {
    x: 0,
    y: 0
    },
    width: 30, height: 38, color: 'gold',
    imageSrc: ''
})





const Box1 = new Block({
    position: {
        x: 100,
        y: 350
        },
        velocity: {
        x: 0,
        y: 0
        },  
        width: 40, height: 40, color: 'black'
})



const Box2 = new Block({
    position: {
        x: -30,
        y: 490
        },
        velocity: {
        x: 0,
        y: 0
        },  
        width:9070, height: 250, color: 'black'
})


const Box3 = new Block({
    position: {
        x: 410,
        y: 550
        },
        velocity: {
        x: 0,
        y: 0
        },  
        width:290, height: 50, color: 'black'
})


const Box4 = new Block({
    position: {
        x: 600,
        y: 450
        },
        velocity: {
        x: 0,
        y: 0
        },  
        width:40, height: 40, color: 'black'
})


const Box5 = new Block({
    position: {
        x: 800,
        y: 450
        },
        velocity: {
        x: 0,
        y: 0
        },  
        width:40, height: 40, color: 'black'
})




const Box6 = new Block({
    position: {
        x: 760,
        y: 260
        },
        velocity: {
        x: 0,
        y: 0
        },  
        width:40, height: 40, color: 'black'
})

const Box7 = new Block({
    position: {
        x: 480,
        y: 310
        },
        velocity: {
        x: 0,
        y: 0
        },  
        width:40, height: 40, color: 'black'
})


const Box8 = new Block({
    position: {
        x: 320,
        y: 350
        },
        velocity: {
        x: 0,
        y: 0
        },  
        width:40, height: 40, color: 'black'
})



const coin1 = new Interact({
    position: {
        x: 600,
        y: 220
        },
        velocity: {
        x: 0,
        y: 0
        },  
        width:40, height: 40, color: 'black',
        type: 'Coin', imageSrc: './img/coin.png',
        framesHold: 15
})


const coin2 = new Interact({
    position: {
        x: 100,
        y: 220
        },
        velocity: {
        x: 0,
        y: 0
        },  
        width:40, height: 40, color: 'black',
        type: 'Coin', imageSrc: './img/coin.png',
        framesHold: 15
})


const luckyblock1 = new Interact({
    position: {
        x: 400,
        y: 350
        },
        velocity: {
        x: 0,
        y: 0
        },  
        width:40, height: 40, color: 'black',
        type: 'luckyblock', imageSrc: './img/luckyblock.png',
        framesHold: 18, scale: 0.080
})





const cloud1 = new Background({
    position: {
        x: 420,
        y: 120
        },
        velocity: {
        x: 0,
        y: 0
        },  
        width:40, height: 40, color: 'black',
        imageSrc: './img/cloud.png', scale: 0.10
})

const bush1 = new Background({
    position: {
        x: 260,
        y: 445
        },
        velocity: {
        x: 0,
        y: 0
        },  
        width:40, height: 40, color: 'black',
        imageSrc: './img/bush.png', scale: 0.09
})


const mountain1 = new Background({
    position: {
        x: 20,
        y: 420
        },
        velocity: {
        x: 0,
        y: 0
        },  
        width:40, height: 40, color: 'black',
        imageSrc: './img/mountain.png', scale: 0.14
})

