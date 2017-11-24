import { INITBOARD } from '../actions/BoardAction'

const defaultState = {
  boardElement: []
}

export default (state=defaultState, action) => {
  switch (action.type) {
    case INITBOARD:
      return {...state, boardElement: action.payload.initialValue}
    default:
      return state
  }
}
