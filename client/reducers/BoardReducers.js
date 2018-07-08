const defaultState= {
  board: []
}

const boardReducers = (state=defaultState, action) =>  {
  switch (action.type) {
    case 'MAKE_BOARD':
      return (...state, board: action.payload.board)
    default:
    return state
  }
}

export default boardReducers
