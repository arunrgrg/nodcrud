const mongoose = require('mongoose')

const userdbSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    id: {
        type: Boolean,
        require: true,
        default: false
    }
})

module.exports = mongoose.model('userdb', userdbSchema)