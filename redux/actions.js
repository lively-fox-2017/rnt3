export const playerPlace = (payload) => {
  return {
    type: 'PLAYER_PLACE'
  };
}

export const botPlace = (pos) => {
  return {
    type: 'BOT_MOVE'
  }
}

export const initBoard = () => {
  return {
    type: 'INIT_BOARD',
    state: {board: [['i', 'i', 'i'],
          ['i', 'i', 'i'],
          ['i', 'i', 'i']],}
  };
}
