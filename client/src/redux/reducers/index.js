import { combineReducers } from 'redux'
import location from './location'
import forecast from './forecast'

export default combineReducers({
  location,
  forecast
})

export * from './location'
export * from './forecast'