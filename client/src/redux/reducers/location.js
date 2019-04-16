const LOAD = 'location/LOAD'

const initialState = {
  latitude: 0,
  longitude: 0
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return action.location
    default:
      return state
  }
}

export function loadLocation(location) {
  return { type: LOAD, location }
}

export function getLocation() {
  return dispatch => {
    console.log('getting location')
    navigator.geolocation.getCurrentPosition((location) => {
      dispatch(loadLocation(location.coords))
    })
  }
}
