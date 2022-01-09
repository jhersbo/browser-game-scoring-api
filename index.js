const express = require('express')
require('dotenv').config()
const app = express()

//express settings
app.use(express.json())

//controllers
app.use('/users', require('./controllers/users'))

//landing
app.get('/', (req, res)=>{
    res.json({
        greeting: 'Homepage!',
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