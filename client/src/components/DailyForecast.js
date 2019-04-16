import React from 'react'

let DailyForecast = props => {
  const { forecast } = props

  return (
    <div>
      {forecast && (
        <div>
          Forecast for: {`Day: ${forecast.date.day}/${forecast.date.month}/${forecast.date.year}`}
          <ul>
            <li>{forecast.temperature}</li>
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