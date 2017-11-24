export const setPlayerName = name => ({
  type: 'SET_PLAYER_NAME',
  payload: { name }
});

export const setPlayerO = () => ({
  type: 'SET_PLAYER_O'
});

export const setPlayerX = () => ({
  type: 'SET_PLAYER_X'
});

export const setBoardValue = (val, rowIdx, boxIdx) => ({
  type: 'SET_BOARD_VALUE',
  payload: {
    value: val,
    rowIdx: rowIdx,
    boxIdx: boxIdx
  }
});