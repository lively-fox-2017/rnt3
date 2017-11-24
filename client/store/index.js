import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import ticTacToe from '../reducers/ticTacToe'

const store = createStore(ticTacToe, applyMiddleware(thunk))

export default store
