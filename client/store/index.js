import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import TicTacToe from '../reducers/TicTacToe'

const store = createStore(TicTacToe, applyMiddleware(thunk))

export default store
