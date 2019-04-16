import * as store from '../../redux'

export function mainDispatcher(dispatch) {
  return {
    getLocation: () => {
      dispatch(store.getLocation())
    },
    getForecast: (days) => {
      dispatch(store.getForecast(days))
    }
  }
}
