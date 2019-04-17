import axios from 'axios'

const LOAD = 'forecast/LOAD'

const initialState = {}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return action.forecast
        default:
            return state
    }
}

export function loadForecast(forecast) {
    return { type: LOAD, forecast }
}

export function getForecast(location) {
    return dispatch => {
        axios.get(`/api/forecast/${location.latitude}/${location.longitude}`).then(res => res.data)
            .then(forecast => dispatch(loadForecast(forecast)))
    }
}
