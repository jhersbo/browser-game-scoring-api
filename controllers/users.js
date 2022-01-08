const router = require('express').Router()
const db = require('../models/index')
const users = require('../models/users')


let seedData = [
    {
        "username": "jhersbo",
        "password": "123",
        "highScore": 15.4
    },
    {
        "username": "poopmaster",
        "password": "123",
        "highScore": 69
    }
]
router.get('/seed', (req, res)=>{
    db.User.insertMany(seedData)
    .then(()=>{
        res.status(200).json({
            msg: 'Seed Successful'
        })
    })
    .catch((err)=>{
        res.status(200).json({
            error: `${err}`
        })
    })
})

//return all user profiles
router.get('/', (req, res)=>{
    db.User.find()
    .then((users)=>{
        res.status(200).json({users})
    })
    .catch((err)=>{
        res.status(400).json({err})
    })
})

//return a particular user's profile
router.get('/:username', (req, res)=>{
    db.User.find({username: req.params.username})
    .then((user)=>{
        res.status(200).json({user})
    })
    .catch((err)=>{
        res.status(400).json({err})
    })
})




//router export
module.exports = router