const router = require('express').Router()
const db = require('../models/index')

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

//create new user profile
router.post('/', (req, res)=>{
    db.User.create(req.body)
    .then((user)=>{
        res.status(200).json({user})
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

//update a user's score
router.put('/:username', (req, res)=>{
    db.User.findOneAndUpdate({username: req.params.username}, {score: req.body.score}, {new: true})
    .then((user)=>{
        res.status(200).json({user})
    })
    .catch((err)=>{
        res.status(400).json({err})
    })
})

//delete a user's profile
router.delete('/:username', (req, res)=>{
    db.User.findOneAndDelete({username: req.params.username})
    .then(()=>{
        res.status(200).json({
            msg: 'Delete Successful'
        })
    })
    .catch((err)=>{
        res.status(400).json({
            msg: 'Delete Failed',
            error: err
        })
    })
})

//router export
module.exports = router