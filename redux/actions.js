const playerPlace = (payload) => {
  return {
    type: 'PLAYER_PLACE'
  };
}

const botPlace = (pos) => {
  return {
    type: 'BOT_MOVE'
  }
}

const initBoard = () => {
  return {
    type: 'INIT_BOARD',
    state: {board: [['i', 'i', 'i'],
          ['i', 'i', 'i'],
          ['i', 'i', 'i']],}
  };
}

export default {
  playerPlace,
  botPlace,
  initBoard,
}
