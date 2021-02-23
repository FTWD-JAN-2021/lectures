const express = require('express');
//Load up our environment variables
require('dotenv').config()

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

app.use(express.static('public'));


// our first Route:
app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html');
})

// cat route:
app.get('/cat', (request, response, next) => {
    response.sendFile(__dirname + '/views/cat-page.html')
});





const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`My first app listening on port ${PORT}! `)
});