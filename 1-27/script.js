let canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let ctx = canvas.getContext('2d')

let img = new Image()
img.src = 'img.JPG'
img.onload = function () {
    ctx.drawImage(img, 100, 100, 150, 150)
}


let chicken = {
    x: 100,
    y: 100,
    w: 120,
    h: 150
}


let magenta = {
    x: 0,
    y: 100,
    w: 50,
    h: 50
}


let blue = {
    x: 0,
    y: 0,
    w: 50,
    h: 50
}

let evilSquares = [
    magenta, blue
]


setInterval(function () {
    evilSquares.push({
        x: 0, y: 0, w: 50, h: 50
    })
}, 1000)


function drawRectangles() {
    for (let square of evilSquares) {
        square.x += 1
        square.y += 1
        ctx.fillRect(square.x, square.y, square.w, square.h)
    }
}

// function drawMagentaRectangle() {
//     magenta.x += 1
//     ctx.fillStyle = 'magenta'
//     ctx.fillRect(magenta.x, magenta.y, magenta.w, magenta.h)
// }


// function drawBlueRectangle() {
//     blue.x += 1
//     blue.y += 1
//     ctx.fillStyle = 'blue'
//     ctx.fillRect(blue.x, blue.y, blue.w, blue.h)
// }












function collisionDetection(rect1, rect2) {

    if (rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.y + rect1.h > rect2.y) {
        // collision detected!
        console.log('collision!!!')
        cancelAnimationFrame(interval)
    }
}



let interval = null;

//**GAME ENGINE CONSTANTLY LOOPING */
function animate() {
    interval = requestAnimationFrame(animate)
    //Flipping to a new page <-> clearing the entire canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    drawRectangles()
    // drawMagentaRectangle()
    // drawBlueRectangle()
    drawImageRectangle()


    for (square of evilSquares) {
        collisionDetection(chicken, square)
    }
}
animate()



/***CONTROLS */




function drawImageRectangle() {
    ctx.drawImage(img, chicken.x, chicken.y, chicken.w, chicken.h)
}

window.onkeydown = function (e) {
    console.log(e.key)
    if (e.key === "ArrowLeft") {
        chicken.x -= 100
    }
    if (e.key === "ArrowRight") {
        chicken.x += 100
    }
    if (e.key === "ArrowUp") {
        chicken.y -= 100
    }
    if (e.key === "ArrowDown") {
        chicken.y += 100
    }
}








