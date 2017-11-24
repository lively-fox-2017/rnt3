import { combineReducers } from 'redux'

import User from './userReducer'
import Game from './gameReducer'

const rootReducer = combineReducers({
  User,
  Game
})

export default rootReducer
