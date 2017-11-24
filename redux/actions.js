export const playerPlace = (pos) => {
  return {
    type: 'PLAYER_PLACE'
  };
}

export const botPlace = (pos) => {
  return {
    type: 'BOT_MOVE'
  }
}
