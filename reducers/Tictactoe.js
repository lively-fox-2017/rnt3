const def = {
  playerName: '',
  board: [[null, null, null], [null, null, null], [null, null, null]]
};

const TictactoeReducer = (state=def, action) => {
  switch(action.type) {
    case 'SET_PLAYER_NAME':
      return {...state, playerName: action.payload.name};
    default:
      return state;
  }
};

export default TictactoeReducer;