import { handleActions } from 'redux-actions'

import axios from 'axios'

const API_KEY = 'f08d761b7d293bc4a675324c7e76b042'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

function getAPI(cityName) {
  const url = `${ROOT_URL}&q=${cityName},kr`
  return axios.get(url)
}

const GET_POST = 'GET_POST'
const GET_POST_PENDING = 'GET_POST_PENDING'
const GET_POST_FULFILLED = 'GET_POST_FULFILLED'
const GET_POST_REJECTED = 'GET_POST_REJECTED'

export const getPost = cityName => ({
  type: GET_POST,
  payload: getAPI(cityName)
})

const initialState = {
  pending: false,
  error: false,
  data: []
}

export default handleActions(
  {
    [GET_POST_PENDING]: (state, action) => {
      return {
        ...state,
        pending: true,
        error: false
      }
    },
    [GET_POST_FULFILLED]: (state, action) => {
      const { data } = action.payload
      state.data.push(data)
      return {
        ...state,
        pending: false
      }
    },
    [GET_POST_REJECTED]: (state, action) => {
      return {
        ...state,
        pending: false,
        error: true
      }
    }
  },
  initialState
)
