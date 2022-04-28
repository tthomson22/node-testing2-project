const router = require('express').Router();
const Pokemon = require('./model')

router.get('/', (req, res, next) => {
    next()
})

router.get('/:id', (req, res, next) => {
    next()
})

router.post('/', (req, res, next) => {
    next()
})

router.use((err, req, res, next) => {
    res.status(500).json({ message: err.message, stack: err.stack })
})

module.exports = router;