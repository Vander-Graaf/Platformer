






const player = new Sprite({
    position: {
    x: 20,
    y: 400
    },
    velocity: {
    x: 0,
    y: 0
    },
    width: 50, height: 90, color: 'gold'
})



const Brick = new Sprite({
    position: {
    x: 500,
    y: 480
    },
    velocity: {
    x: 0,
    y: 0
    },  
    width: 50, height: 70, color: 'black'
})



const Box = new Block({
    position: {
        x: 800,
        y: 300
        },
        velocity: {
        x: 0,
        y: 0
        },  
        width: 50, height: 280, color: 'black'
})



const floor1 = new Block({
    position: {
        x: -30,
        y: 550
        },
        velocity: {
        x: 0,
        y: 0
        },  
        width:240, height: 50, color: 'black'
})


const floor2 = new Block({
    position: {
        x: 410,
        y: 550
        },
        velocity: {
        x: 0,
        y: 0
        },  
        width:690, height: 50, color: 'black'
})