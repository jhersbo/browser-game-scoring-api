const mongoose = require('mongoose')

const scoreSchema = new mongoose.Schema({
    username: String,
    score: Number,
    date: String //maybe change? idk what format dates should be in
})

module.exports = mongoose.model('scores', scoreSchema)