import { handleActions } from 'redux-actions'

const GET_TODODATA = 'GET_TODODATA'

export const getTodo = data => ({
  type: GET_TODODATA,
  payload: data
})

const initialState = {
  data: []
}

export default handleActions(
  {
    [GET_TODODATA]: (state, action) => {
      const { data } = action.payload
      state.data.push(data)
      return {
        ...state
      }
    }
  },
  initialState
)
