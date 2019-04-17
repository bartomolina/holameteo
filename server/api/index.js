'use strict'

const axios = require('axios')

const router = require('express').Router()

router.get('/forecast/:lat/:long', (req, res) => {
    axios.get(`https://api.darksky.net/forecast/${process.env.DARKSKY_API}/${req.params.lat},${req.params.long}`)
        .then(res => res.data)
        .then(forecast => {
            var newforecast = forecast.daily.data.map((value) => {
                let date = new Date(value.time * 1000)
                return {
                    time: value.time,
                    date: {
                        day: date.getDate(),
                        month: date.getMonth() + 1,
                        year: date.getFullYear()
                    },
                    temperature: {
                        max: value.temperatureHigh,
                        min: value.temperatureLow
                    },
                    humidity: value.humidity,
                    wind: value.windSpeed,
                    precipitation: value.precipProbability
                }
            })
            return res.send(newforecast)
        })
})

module.exports = router

/*res.send({
        date: {
            day: 1,
            month: 24,
            year: 2019
        },
        temperature: 25,
        humidity: 20,
        wind: 10,
        precipitation: 5
    })*/
