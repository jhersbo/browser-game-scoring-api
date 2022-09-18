const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')

//express settings
app.use(express.json())
app.use(cors({
    origin: "https://jhersbo.github.io/marshes-melons/",
    credentials: true,
}))

//controllers
app.use('/users', require('./controllers/users'))

//landing
app.get('/', (req, res)=>{
    res.json({
        greeting: 'Homepage!',
        corsPolicy: 'This is CORS-enabled for all origins!',
        routes: {
            returnAllUsers: 'get /',
            createNewUser: 'post /',
            returnOneUser: 'get /:username',
            updateUserScore: 'put /:username',
            deleteUser: 'delete /:username'
        }
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