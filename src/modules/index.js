import { combineReducers } from 'redux'
import weather from './weather'
import json from './json'
import todo from './todo'

export default combineReducers({
  weather,
  json,
  todo
})
