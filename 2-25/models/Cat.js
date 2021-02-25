const mongoose = require('mongoose')

const Cat = mongoose.model('Cat',
    {
        name: String,
        age: Number,
        color: { type: String, default: 'black' }
    });

module.exports = Cat     