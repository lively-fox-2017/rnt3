const stateTictacToe = {
  name: '',
}

const ticTacToeReducer = (state = stateTictacToe, action) => {
  switch (action.type) {
    case 'USER_CHANGE':
      return {
        ...state, name: action.payload.name
      }
    default:
      return state
  }
}

export default ticTacToeReducer
