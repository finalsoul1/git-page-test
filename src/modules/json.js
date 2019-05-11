import { handleActions } from 'redux-actions'

const GET_JSONDATA = 'GET_JSONDATA'

function getJsonData(jsonData) {
  const korCityList = []
  jsonData.map(item => {
    if (item.country === 'KR') korCityList.push(item.name)
  })
  return korCityList
}

export const getCityName = data => ({
  type: GET_JSONDATA,
  payload: getJsonData(data)
})

const initialState = {
  data: []
}
export default handleActions(
  {
    [GET_JSONDATA]: (state, action) => {
      return {
        ...state
      }
    }
  },
  initialState
)
