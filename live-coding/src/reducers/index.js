import { combineReducers } from 'redux'

import boardReducer from './board'
import userReducer from './user'

const rootReducer = combineReducers({
  boardReducer,
  userReducer
})

export default rootReducer
