const router = require('express').Router()
const db = require('../models/index')
const scores = require('../models/scores')


//seed data
let seedData = [
    {
        'username': 'jhersbo',
        'score': 15.4,
        'date': '01/06/2022'
    },
    {
        'username': 'poopmaster69',
        'score': 42.0,
        'date': '01/06/2022'
    },
    {
        'username': 'boobmaster23',
        'score': 24.5,
        'date': '01/06/2022'
    }
]

router.get('/seed', (req, res)=>{
    scores.insertMany(seedData)
    .then(()=>{
        res.status(200).json({
            msg: 'Seed Successful'
        })
    })
    .catch((err)=>{
        res.status(400).json({
            msg: 'Seed failed',
            error: err
        })
    })
})//mongo connection wasn't working on my mac


//respond with all user scores
router.get('/', (req, res)=>{
    db.scores.find()
    .then(()=>{
        res.json({scores})
        res.status(200)
    })
    .catch((err)=>{
        res.json({
            error: 404
        })
        console.log(err)
    })
})

//respond with a particular user's scores
router.get('/:username', (req, res)=>{
    db.scores.find(req.params.username)
    .then((scores)=>{
        res.status(200).json({scores})
    })
    .catch(()=>{
        res.status(400).json({
            error: 'Could not find these scores.'
        })
    })
})

//router export
module.exports = router