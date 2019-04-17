import * as store from '../../redux'

export function mainDispatcher(dispatch) {
  return {
    getForecast: (location) => {
      dispatch(store.getForecast(location))
    }
  }
}
