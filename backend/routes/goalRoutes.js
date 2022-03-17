const express = require('express')
const router = express.Router()
/* const { 
    getGoals,
    setGoal,
    updGoal,
    delGoal,
} = require('../controllers/goalController') */

/* router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(delGoal).put(updGoal) */

//Read
router.get('/', (req, res) => {
    res.status(200).json({ message: 'Get goals' })
})
//Create
router.post('/', (req, res) => {
    res.status(200).json({ message: 'Set goal' })
})
//Update
router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
})
//Delete
router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
})

module.exports = router