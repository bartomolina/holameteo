'use strict'

const router = require('express').Router()

router.get('/forecast/:date', (req, res) => {
    res.send({
        date: {
            day: 1,
            month: 24,
            year: 2019
        },
        temperature: 25,
        humidity: 20,
        wind: 10,
        precipitation: 5
    })
})

module.exports = router
