const defaultState = {
  board: [['-','-','-'],['-','-','-'],['-','-','-']],
  winner: ''
}

const Game = (state=defaultState, action) => {
  switch (action.type) {
    case 'SetBoard':
      var data = {...state, board: action.payload.board}
      return data
    case 'SetWinner':
      var data = {...state, winner: action.payload.winner}
      return data
    case 'ResetBoard':
      var data = {...state, winner: '', board:[['-','-','-'],['-','-','-'],['-','-','-']]}
      return data
    default :
      return state
  }
}

export default Game
