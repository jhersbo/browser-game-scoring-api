const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    score: Number
})

module.exports = mongoose.model('User', userSchema)