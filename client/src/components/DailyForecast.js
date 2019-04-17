import React from 'react'

let DailyForecast = props => {
  const { forecast } = props

  return (
    <div>
      {forecast && (
        <div>
          Forecast for: {`${forecast.date.day}/${forecast.date.month}/${forecast.date.year}`}
          <ul>
            <li>{forecast.temperature.max}</li>
            <li>{forecast.temperature.min}</li>
            <li>{forecast.humidity}</li>
            <li>{forecast.wind}</li>
            <li>{forecast.precipitation}</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default DailyForecast