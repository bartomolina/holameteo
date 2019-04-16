'use strict'

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')

const app = express()

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true
    })
)
app.use(bodyParser.urlencoded({ extended: false }))
app.set('port', process.env.PORT || 3001)

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.use('/api', require('./server/api'))

app.listen(app.get('port'))