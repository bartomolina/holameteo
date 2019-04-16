'use strict'

const router = require('express').Router()

router.get('/forecast', (req, res) => res.send('OK'))

module.exports = router
