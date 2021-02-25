const mongoose = require('mongoose')

const Dog = mongoose.model('Dog',
    {
        name: String,
        age: Number,
        color: { type: String, default: 'black' }
    });

module.exports = Dog 