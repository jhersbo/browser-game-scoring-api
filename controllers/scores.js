const router = require('express').Router()
const db = require('../models/index')
const scores = require('../models/scores')
const auth = require('../models/auth')

//seed data
// let seedData = [
//     {
//         'username': 'jhersbo',
//         'score': 15.4,
//         'date': '01/06/2022'
//     },
//     {
//         'username': 'poopmaster69',
//         'score': 42.0,
//         'date': '01/06/2022'
//     },
//     {
//         'username': 'boobmaster23',
//         'score': 24.5,
//         'date': '01/06/2022'
//     }
// ]

// let seedAuth = [
//     {
//         'username': 'poopmaster69',
//         'password': '123'
//     },
//     {
//         'username': 'boobmaster23',
//         'password': '69420'
//     }
// ]

// router.get('/seedauth', (req, res)=>{
//     auth.insertMany(seedAuth)
//     .then(()=>{
//         res.status(200).json({
//             msg: 'Seed Successful'
//         })
//     })
//     .catch((err)=>{
//         res.status(400).json({
//             msg: 'Seed failed',
//             error: err
//         })
//     })
// })

// router.get('/seeddata', (req, res)=>{
//     scores.insertMany(seedData)
//     .then(()=>{
//         res.status(200).json({
//             msg: 'Seed Successful'
//         })
//     })
//     .catch((err)=>{
//         res.status(400).json({
//             msg: 'Seed failed',
//             error: err
//         })
//     })
// })


//respond with all user scores--working
router.get('/', (req, res)=>{
    db.scores.find()
    .then((scores)=>{
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
//create new score/profile--working
router.post('/', (req, res)=>{
    db.scores.create(req.body)
    .then((scores)=>{
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

//respond with a particular user's scores--working
router.get('/:username', (req, res)=>{
    db.scores.find({username: req.params.username})
    .then((scores)=>{
        res.status(200).json({scores})
    })
    .catch(()=>{
        res.status(400).json({
            error: 'Could not find these scores.'
        })
    })
})
//update a user's score--not working
router.put('/:username', (req, res)=>{
    db.scores.findOneAndUpdate({username: req.params.username}, {score: req.params.score})
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