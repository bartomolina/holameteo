import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Main from './containers/Main'

class App extends Component {
  render() {
    return (
      <div className="wrapper wrapper-content">
        <Route exact path="/" component={Main} />
      </div>
    )
  }
}

export default App
