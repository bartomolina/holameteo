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

export function getForecast(days) {
    return dispatch => {
        Promise.all([...Array(days)].map((name, index) => {
            return axios.get(`/api/forecast/1`).then (res => res.data)
        }))
        .then(forecast => dispatch(loadForecast(forecast)))
    }
}
