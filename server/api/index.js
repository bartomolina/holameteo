'use strict'

const axios = require('axios')

const router = require('express').Router()

router.get('/forecast/:lat/:long', (req, res) => {
    axios.get(`https://api.darksky.net/forecast/${process.env.DARKSKY_API}/${req.params.lat},${req.params.long}`)
        .then(res => res.data)
        .then(forecast => {
            var newforecast = forecast.daily.data.map((value) => {
                let icon = ''
                
                switch (value.icon) {
                    case 'clear-day':
                        icon = 'wi-day-sunny'
                        break
                    case 'clear-night':
                        icon = 'wi-night-clear'
                        break
                    case 'rain':
                        icon = 'wi-rain'
                        break
                    case 'snow':
                        icon = 'wi-snow'
                        break
                    case 'sleet':
                        icon = 'wi-sleet'
                        break
                    case 'wind':
                        icon = 'wi-windy'
                        break
                    case 'fog':
                        icon = 'wi-fog'
                        break
                    case 'cloudy':
                        icon = 'wi-cloudy'
                        break
                    case 'partly-cloudy-day':
                        icon = 'wi-day-cloudy-high'
                        break
                    case 'partly-cloudy-night':
                        icon = 'wi-night-partly-cloudy'
                        break
                }

                let date = new Date(value.time * 1000)
                return {
                    time: value.time,
                    date: {
                        day: date.getDate(),
                        month: date.getMonth() + 1,
                        year: date.getFullYear()
                    },
                    icon,
                    temperature: {
                        max: Math.round(value.temperatureHigh),
                        min: Math.round(value.temperatureLow)
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
