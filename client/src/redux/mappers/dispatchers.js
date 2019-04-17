import * as store from '../../redux'

export function mainDispatcher(dispatch) {
  return {
    getForecast: (location, units) => {
      dispatch(store.getForecast(location, units))
    }
  }
}
