import * as store from '../../redux'

export function mainDispatcher(dispatch) {
  return {
    getLocation: () => {
      dispatch(store.getLocation())
    }
  }
}
