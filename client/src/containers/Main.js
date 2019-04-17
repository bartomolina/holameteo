import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mainDispatcher, mainMap } from '../redux/mappers'
import DailyForecast from '../components/DailyForecast'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      mode: 'si'
    }

    this.switchMode = this.switchMode.bind(this)
  }

  switchMode(mode) {
    const { getForecast } = this.props
    this.setState({ mode })

    navigator.geolocation.getCurrentPosition((location) => {
      getForecast(location.coords, this.state.mode)
    })
  }

  componentDidMount() {
    const { getForecast } = this.props

    navigator.geolocation.getCurrentPosition((location) => {
      getForecast(location.coords, this.state.mode)
    })
  }

  render() {
    return (
      <div className="holaweather-container text-center animated fadeInRightBig">
        <div className="row">
          <div className="col-6">
            <button type="button" onClick={() => this.switchMode('si')} className="btn btn-w-m btn-primary">Celsius</button>
          </div>
          <div className="col-6">
            <button type="button" onClick={() => this.switchMode('us')} className="btn btn-w-m btn-primary">Farenheit</button>
          </div>
        </div>
        {[...Array(5)].map((name, index) => {
          return (
            <div key={index}>
              <DailyForecast forecast={this.props.forecast[index]} mode={this.state.mode} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default connect(mainMap, mainDispatcher)(Main)