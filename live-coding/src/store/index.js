import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import tictactoe from '../reducers'

const middleware = applyMiddleware(thunk)

const store = createStore(tictactoe, middleware)

export default store
