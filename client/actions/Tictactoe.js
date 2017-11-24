export const setBoard = (board) => {
  return {
    type: 'MAKE_BOARD',
    payload: {
      board
    }
  }
}
