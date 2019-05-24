const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    coords: {
        lat: Number,
        lng: Number
    }
})

module.exports = mongoose.model('ItemModel', itemSchema)
