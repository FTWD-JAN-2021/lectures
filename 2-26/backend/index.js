const mongoose = require('mongoose')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const cors = require('cors')
const bodyParser = require('body-parser')
const Stuff = require('./models/Stuff')

app.use(cors()) //Need this to connect to the front or any differnt app
app.use(bodyParser.json()) //This reads the data in the post


mongoose
    .connect(`mongodb+srv://niko:nikoniko@cluster0.k13bi.mongodb.net/FridayApp?retryWrites=true&w=majority`)
    .then(res => console.log('=-=-=-=-=connected to database=-=-=-=-=-=-'))
    .catch(err => console.error(err))






app.get('/great', (req, res) => {
    res.json({ GreatStart: true })
})


app.post('/saveStuff', async (req, res) => { //Listening to submit from client 
    console.log(req.body, ' here in this post route')
    //Save to the DB???
    let r = await Stuff.create(req.body)
    res.json(r)
})


app.get('/stuff', async (req, res) => {
    let inputzFromDb = await Stuff.find({})
    res.json(inputzFromDb)
})

app.delete(`/deleteChutzpah/:id`, async (req, res) => {
    console.log("delete this itenm: ", req.params) //before req.query with q 
    let r = await Stuff.deleteOne({ _id: req.params.id })
    res.json(r)
})



app.listen(PORT) //localhost:5000