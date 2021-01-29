const express = require('express')
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');





let squares = []



io.on('connection', (socket) => {
    console.log(socket.id, 'a user connected');

    let square = {
        x: Math.random() * 500,
        y: Math.random() * 500,
        w: 50,
        h: 50,
        color: "#" + ((1 << 24) * Math.random() | 0).toString(16),
        id: socket.id
    }


    squares.push(square)

    io.sockets.emit('sendSquaresFromServer', { squares })


    socket.emit('yourId', { id: socket.id })


    socket.on('keyFromClient', ({ key, id }) => {
        console.log(key, id)
        let square = squares.find(eachSq => eachSq.id === id)

        if (square) {
            switch (key) {
                case 'ArrowLeft':
                    square.x -= 10

                    break;
                case 'ArrowRight':
                    square.x += 10

                    break;
                case 'ArrowUp':
                    square.y -= 10

                    break;
                case 'ArrowDown':
                    square.y += 10

                    break;
            }
            io.sockets.emit('sendSquaresFromServer', { squares })
        }


    })

    socket.on('disconnect', () => {
        console.log(socket.id, 'user disconnected');
        squares = squares.filter(eachSq => eachSq.id !== socket.id)
    });













    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });






});

http.listen(3000, () => {
    console.log('listening on *:3000');
});


// Routing
app.use(express.static(path.join(__dirname, 'public')));