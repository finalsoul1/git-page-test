import { handleActions } from 'redux-actions'

import axios from 'axios'

const API_KEY = `${process.env.REACT_APP_WEATHER_API}`
console.log('api: ', API_KEY)

// console.log('google api',  d)

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

function getAPI(cityName) {
  const url = `${ROOT_URL}&q=${cityName},kr`
  return axios.get(url)
}

const GET_WEAHTER = 'GET_WEAHTER'
const GET_WEAHTER_PENDING = 'GET_WEAHTER_PENDING'
const GET_WEAHTER_FULFILLED = 'GET_WEAHTER_FULFILLED'
const GET_WEAHTER_REJECTED = 'GET_WEAHTER_REJECTED'

export const getPost = cityName => ({
  type: GET_WEAHTER,
  payload: getAPI(cityName)
})

const initialState = {
  pending: false,
  error: false,
  data: []
}

export default handleActions(
  {
    [GET_WEAHTER_PENDING]: (state, action) => {
      return {
        ...state,
        pending: true,
        error: false
      }
    },
    [GET_WEAHTER_FULFILLED]: (state, action) => {
      const { data } = action.payload
      state.data.push(data)
      return {
        ...state,
        pending: false
      }
    },
    [GET_WEAHTER_REJECTED]: (state, action) => {
      return {
        ...state,
        pending: false,
        error: true
      }
    }
  },
  initialState
)
