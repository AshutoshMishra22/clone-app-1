import { combineReducers } from 'redux'
import testReducer from './reducers/testReducer'
export default function createReducer() {
    return combineReducers({
      testReducer
    })
  }