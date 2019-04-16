'use strict'

const router = require('express').Router()

router.get('/forecast/:date', (req, res) => {
    res.send({
        temperature: 25,
        humidity: 20,
        wind: 10,
        precipitation: 5
    })
})

module.exports = router
