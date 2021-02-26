const { Schema, model } = require('mongoose')


const stuffSchema = new Schema({
    inputz: String
})

module.exports = model('stuff', stuffSchema)