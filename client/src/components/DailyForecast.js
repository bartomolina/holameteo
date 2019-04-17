import React from 'react'

let DailyForecast = props => {
  const { forecast, mode } = props

  return (
    <div>
      {forecast && (
        <div className="row widget style1 navy-bg">
          <div className="col-4">
            <i className={"wi " + forecast.icon}></i>
          </div>
          <div className="col-8 text-right">
            <h2>{`${forecast.date.day} / ${forecast.date.month}`}</h2>
            <h2 className="font-bold">Max {forecast.temperature.max}'{mode === 'us' ? 'F' : 'C'}</h2>
            <h3 className="font-bold">Min {forecast.temperature.min}'{mode === 'us' ? 'F' : 'C'}</h3>
            <h5 className="font-bold">Humidity {forecast.humidity}%</h5>
            <h5 className="font-bold">Wind {forecast.wind} {mode === 'us' ? 'mph' : 'mps'}</h5>
            <h5 className="font-bold">Precipitation {forecast.precipitation}%</h5>
          </div>
        </div>
      )}
    </div>
  )
}

export default DailyForecast