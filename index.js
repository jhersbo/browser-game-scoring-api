const express = require('express')
require('dotenv').config()
const app = express()
const methodOverride = require('method-override')
const cors = require('cors')

//express settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.json())
app.use(cors())

//controllers
app.use('/scores', require('./controllers/scores'))

//landing
app.get('/', (req, res)=>{
    res.json({
        greeting: 'Homepage!'
    })
})
app.get('*', (req, res)=>{
    res.json({
        msg: 'Error 404 !!'
    })
})

//connection
app.listen(process.env.PORT, ()=>{
    console.log(`Listening on ${process.env.PORT}`)
})