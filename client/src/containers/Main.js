import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mainDispatcher, mainMap } from '../redux/mappers'

class Main extends Component {
  componentDidMount() {
    const { location, getLocation } = this.props

    getLocation()
  }

  render() {
    return (
      <div>
        <h3>Location</h3>
        <div>Longitude: {this.props.location.longitude}</div>
        <div>Latitude: {this.props.location.latitude}</div>
      </div>
    )
  }
}

export default connect(mainMap, mainDispatcher)(Main)
