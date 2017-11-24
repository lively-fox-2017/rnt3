import { combineReducers } from 'redux'
import boardReducers from './BoardReducers'

const rootReducer = combineReducers({
  board: boardReducers
})

export default rootReducer
