const canvas = document.querySelector('canvas')
canvas.width = innerWidth
canvas.height = innerHeight

const ctx = canvas.getContext('2d')

let coin = new Image()
coin.src = 'coin-sprite-animation-sprite-sheet.png'

//void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
let startX = 0
let startY = 0
let coinWidth = coin.width / 10;
let coinHeight = coin.height / 1;
let startWidth = coinWidth
let startHeight = coin.height
let frame = 0;

function drawCoin(startX) {
    ctx.drawImage(coin, startX, startY, startWidth, coinHeight, 0, 0, coinWidth, coinHeight)
}


let dog = new Image()
dog.src = 'Dog.png'



class Dog {
    constructor(x, y, src, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.src = src
        this.img = null
        this.sx = 0
        this.sy = 0
        this.sw = null
        this.sh = null
        this.numberTall = 5
        this.numberWide = 10
        this.direction = 1
    }

    load() {
        let img = new Image()
        img.src = this.src
        img.onload = () => {
            this.img = img
            this.sw = img.width / this.numberWide
            this.sh = img.height / this.numberTall
            this.draw(img)
        }
        console.log(img)

    }
    draw(img) {

        if (frame % 10 === 0) {

            if (this.sx < this.img.width - this.sx) {
                this.sx += this.sw
            } else {
                this.sx = 0;
            }

        }
        //


        ctx.drawImage(this.img, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.w, this.h)
        //ctx.restore();
        //

    }
    flip() {

        //this.direction = this.direction * -1
        // ctx.save()
        this.w = this.w * -1
        ctx.scale(-1, 1)
        // ctx.restore()
    }

    dead() {
        this.numberWide = 10
        this.sy = 0

    }
    fall() {
        this.numberWide = 8

        this.sy = this.sh
    }
    hurt() {
        this.numberWide = 10
        this.sy = this.sh * 2
    }
    idle() {
        this.numberWide = 10
        this.sy = this.sh * 3
    }
    run() {
        this.numberWide = 8
        this.sy = this.sh * 4
    }


}

let fido = new Dog(0, 0, 'Dog.png', 100, 100)
fido.load()


let sparky = new Dog(100, 200, 'Dog.png', 100, 100)
sparky.load()


// function dogDie() {

//     let sx = 0;
//     let sy = 0;
//     let sw = dog.width / 10
//     let sh = dog.height / 5

//     console.log(sw, sh)


//     ctx.drawImage(dog, sx, sy, sw, sh, 100, 100, 100, 100)
//     sx += sw
//     if (sw <= dog.width) {
//         setTimeout(dogDie, 300)
//     }
// }


let i = 0
function recursiveExample() {
    i++
    console.log(i)
    if (i < 5) {
        setTimeout(recursiveExample, 1000)
    }
}




function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (frame % 5 === 0) {
        startX += coinWidth
    }
    if (startX >= coin.width) {
        startX = 0;
    }

    fido.draw()
    sparky.draw()
    drawCoin(startX)

    frame++;
}

animate()
