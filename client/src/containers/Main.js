import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mainDispatcher, mainMap } from '../redux/mappers'
import DailyForecast from '../components/DailyForecast'

class Main extends Component {
  componentDidMount() {
    const { getLocation, getForecast } = this.props

    getLocation()
    getForecast(5)
  }

  render() {
    return (
      <div>
        {[...Array(5)].map((name, index) => {
          return (
            <div key={index}>
              <DailyForecast forecast={this.props.forecast[index]} />
            </div>
          )
        })}
        <div>Longitude: {this.props.location.longitude}</div>
        <div>Latitude: {this.props.location.latitude}</div>
      </div>
    )
  }
}

export default connect(mainMap, mainDispatcher)(Main)
