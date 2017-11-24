const def = {
  playerName: '',
  playerChar: '',
  opponentChar: '',
  board: [[null, null, null], [null, null, null], [null, null, null]]
};

const TictactoeReducer = (state=def, action) => {
  switch(action.type) {
    case 'SET_PLAYER_NAME':
      return {...state, playerName: action.payload.name};
    case 'SET_PLAYER_O':
      return {...state, playerChar: 'o', opponentChar: 'x'};
    case 'SET_PLAYER_X':
      return {...state, playerChar: 'x', opponentChar: 'o'};
    case 'SET_BOARD_VALUE':
      let updatedBoard = state.board;
      updatedBoard[action.payload.rowIdx][action.payload.boxIdx] = action.payload.value;
      return {...state, board: updatedBoard};
    default:
      return state;
  }
};

export default TictactoeReducer;