const mongoose = require('mongoose')
const Cat = require('./models/Cat')
const Dog = require('./models/Dog')

mongoose
    .connect('mongodb://localhost/panda', { //Swap this out with url provided by Atlas
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));








// const kitty = new Cat({ name: 'Ironhacker' });
// kitty.save()

// Cat.create({ name: 'Lucky', age: 32 })
//     .then(res => console.log(res))
//     .catch(err => console.error(err))


// Cat.remove({ $or: [{ color: 'black' }, { color: 'pink' }] }).then(cats => console.log(cats))


const cats = []

for (let i = 0; i < 10; i++) {
    cats.push(
        { name: `biscuit ${i}`, color: "#" + ((1 << 24) * Math.random() | 0).toString(16) }
    )
}

Cat.insertMany(cats).then(res => {
    console.log('cats created', res)
    // mongoose.connection.close()
})

//Model.methodUsing({ query }, { update }).then( result )
// Cat.updateOne({ name: 'biscuit 7' }, { color: 'gray', age: 5 }).then(cat => {

const express = require('express')
const app = express()

app.get('/find-biscuit', (req, res) => {

    // Cat.findOne({ name: 'biscuit 7' }).then(cat => {

    Cat.findById('6037da411b72ab410a6afe26').then(cat => {
        res.json({ cat })
        console.log(cat)
    })


})



app.listen(3000)












