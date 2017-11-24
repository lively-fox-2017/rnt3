const def = {
  playerName: '',
  playerChar: '',
  opponentChar: '',
  turn: null,
  board: [[null, null, null], [null, null, null], [null, null, null]]
};

const TictactoeReducer = (state=def, action) => {
  switch(action.type) {
    case 'SET_PLAYER_NAME':
      return {...state, playerName: action.payload.name};
    case 'TOGGLE_TURN':
      return {...state, turn: !state.turn};
    case 'SET_PLAYER_O':
      return {...state, playerChar: 'o', opponentChar: 'x', turn: true};
    case 'SET_PLAYER_X':
      return {...state, playerChar: 'x', opponentChar: 'o', turn: false};
    case 'SET_BOARD_VALUE':
      let updatedBoard = state.board;
      updatedBoard[action.payload.rowIdx][action.payload.boxIdx] = action.payload.value;
      return {...state, board: updatedBoard};
    default:
      return state;
  }
};

export default TictactoeReducer;