



class Sprite {
    constructor({position, velocity, height , width, color, imageSrc, scale = 0.075}) {
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

   // c.fillStyle = this.color
   // c.fillRect(this.position.x, this.position.y, this.width, this.height)


      
        c.drawImage(
        this.image,
        39,
        0,
        this.image.width / 1,
        this.image.height / 1,
        this.position.x,
        this.position.y,
        (this.image.width / 1) * this.scale,
        (this.image.height / 1)* this.scale
        
        )

        this.image.src = ''

        if (player.velocity.y !== 0) {
         onGround = false
        }
         
 
        
         if (this.velocity.x == 0 && this.velocity.y == 0 && onGround && lastkey == 'd') {
         this.image.src = './img/idle-right.png'
         } else if (this.velocity.x == 0 && this.velocity.y == 0 && onGround && lastkey == 'a') {
         this.image.src = './img/idle-left.png'
         }
 
         if (onGround == false && lastkey == 'd' || player.velocity.y !== 0 && lastkey == 'd'){
             this.image.src = './img/jump-right.png'
         } else if (onGround == false && lastkey == 'a'|| player.velocity.y !== 0 && lastkey == 'a') {
             this.image.src = './img/jump-left.png'
         }
 
         if (keys.d.pressed && lastkey == 'd' && onGround) {
           this.image.src = './img/walk-right1.png'
             
         } else if (keys.a.pressed && lastkey == 'a' && onGround) {
           this.image.src = './img/walk-left1.png'
         } 
        
    }

    update() {
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y


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
        // c.fillStyle = this.color
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        
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





















// Монеты 
class Coin {
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
       // c.fillStyle = this.color
       // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        
        c.drawImage(
        this.image,
        -45,
        0,
        this.image.width / 1,
        this.image.height / 1,
        this.position.x,
        this.position.y,
        (this.image.width / 1) * this.scale,
        (this.image.height / 1)* this.scale,
        this.image.src = './img/coin.gif'
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
            this.position.x = -200
            coins += 1
            coinsPick.innerHTML = `COINS <div class="align-under-stats">${coins}</div>`
            coinSound.pause()
            coinSound.currentTime = 0;
            coinSound.play()
         }  
 
 else if (   // правая коллизия
         player.position.y + player.height > this.position.y 
         && this.position.y + this.height > player.position.y + 15
         && player.position.x < this.position.x + this.width 
         && player.position.x + player.width   > this.position.x 
         ){  
            this.position.x = -200
            coins += 1
            coinsPick.innerHTML = `COINS <div class="align-under-stats">${coins}</div>`
            coinSound.pause()
            coinSound.currentTime = 0;
            coinSound.play()
         } 
 else if ( //Верхняя коллизия
         player.position.y + player.height + player.velocity.y > this.position.y
         && this.position.y + this.height -1 > player.position.y + 15
         && player.position.x + player.width   > this.position.x 
         && player.position.x < this.position.x + this.width
         ){  
            this.position.x = -200
            coins += 1
            coinsPick.innerHTML = `COINS <div class="align-under-stats">${coins}</div>`
            coinSound.pause()
            coinSound.currentTime = 0;
            coinSound.play()
         } 
         
 else if ( //Нижняя колизия
         player.position.y + player.height + player.velocity.y > this.position.y
         && this.position.y + this.height + 5 > player.position.y
         && player.position.x + player.width   > this.position.x 
         && player.position.x < this.position.x + this.width
         ){  
            this.position.x = -200
            coins += 1
            coinsPick.innerHTML = `COINS <div class="align-under-stats">${coins}</div>`
            coinSound.pause()
            coinSound.currentTime = 0;
            coinSound.play()
         }  
    }
}
// Монеты 




















const player = new Sprite({
    position: {
    x: 300,
    y: 40
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
        y: 350
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
        y: 350
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
        y: 220
        },
        velocity: {
        x: 0,
        y: 0
        },  
        width:40, height: 40, color: 'black'
})



const coin1 = new Coin({
    position: {
        x: 600,
        y: 220
        },
        velocity: {
        x: 0,
        y: 0
        },  
        width:40, height: 40, color: 'black'
})


const coin2 = new Coin({
    position: {
        x: 100,
        y: 220
        },
        velocity: {
        x: 0,
        y: 0
        },  
        width:40, height: 40, color: 'black'
})