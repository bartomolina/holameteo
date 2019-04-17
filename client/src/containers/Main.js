import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mainDispatcher, mainMap } from '../redux/mappers'
import DailyForecast from '../components/DailyForecast'

class Main extends Component {
  componentDidMount() {
    const { getForecast } = this.props

    navigator.geolocation.getCurrentPosition((location) => {
      getForecast(location.coords)
    })
  }

  render() {
    return (
      <div className="holaweather-container text-center animated fadeInRightBig">
        {[...Array(5)].map((name, index) => {
          return (
            <div key={index}>
              <DailyForecast forecast={this.props.forecast[index]} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default connect(mainMap, mainDispatcher)(Main)