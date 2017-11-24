const defaultState = {
  board: ['-','-','-','-','-','-','-','-','-']
}

const Game = (state=defaultState, action) => {
  switch (action.type) {
    case 'SetBoard':
      var data = {...state, board: action.payload.board}
      console.log(data)
      return data
    default :
      return state
  }
}

export default Game
