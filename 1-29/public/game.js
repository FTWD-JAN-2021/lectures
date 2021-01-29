
let yourId = null;
let squares = []

let canvas = document.querySelector('canvas')
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight / 2
canvas.width = 500;
canvas.height = 500

let ctx = canvas.getContext('2d')


socket.on('yourId', ({ id }) => {
    console.log('your id is', id)
    yourId = id
    ctx.fillText(id, 10, 10)
})


socket.on('sendSquaresFromServer', (data) => {
    console.log("from server ", data)
    squares = data.squares
})


window.onkeydown = event => {
    //When I press a key i tell the server which key and who pressed it
    socket.emit('keyFromClient', { key: event.key, id: yourId })
}


function drawSquares() {
    for (square of squares) {
        ctx.fillStyle = square.color
        ctx.fillRect(square.x, square.y, square.w, square.h)
        ctx.fillText(square.id, square.x, square.y)
    }
}



function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawSquares()
}
animate()


