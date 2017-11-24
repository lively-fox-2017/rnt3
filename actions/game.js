export const SetBoard = (board) => {
  return {
    type: 'SetBoard',
    payload: {
      board
    }
  }
}

export const ResetBoard = () => {
  return {
    type: 'ResetBoard'
  }
}

export const SetWinner = (winner) => {
  return {
    type: 'SetWinner',
    payload: {
      winner
    }
  }
}

export const GameFinish = () => {
  return (dispatch, state) => {
    var board = state().Game.board
    //check rows
    for (let i=0;i<3;i++) {
      let xCount = 0
      let oCount = 0
      for (let j=0;j<3;j++) {
        if(board[i][j] === 'x') {
          xCount++
        } else if(board[i][j] === 'o') {
          oCount++
        }
      }
      if (xCount === 3) {
        return dispatch(SetWinner('x'))
      } else if (oCount === 3) {
        return dispatch(SetWinner('o'))
      }
    }
    //check cols
    for (let i=0;i<3;i++) {
      let xCount = 0
      let oCount = 0
      for (let j=0;j<3;j++) {
        if(board[j][i] === 'x') {
          xCount++
        } else if(board[j][i] === 'o') {
          oCount++
        }
      }
      if (xCount === 3) {
        return dispatch(SetWinner('x'))
      } else if (oCount === 3) {
        return dispatch(SetWinner('o'))
      }
    }
    //check diagonals right
    let xDiagonalR = 0
    let oDiagonalR = 0
    for(let i = 0; i < 3 ;i++) {
      if(board[i][i] === 'x') {
        xDiagonalR++
      } else if (board[i][i] === 'o') {
        oDiagonalR++
      }
    }
    if (xDiagonalR === 3) {
      return dispatch(SetWinner('x'))
    } else if (oDiagonalR === 3) {
      return dispatch(SetWinner('o'))
    }
    //check diagonals left
    let xDiagonalL = 0
    let oDiagonalL = 0
    for(let i = 2; i >= 0;i--) {
      if(board[i][i] === 'x') {
        xDiagonalL++
      } else if (board[i][i] === 'o') {
        oDiagonalL++
      }
    }
    if (xDiagonalL === 3) {
      return dispatch(SetWinner('x'))
    } else if (oDiagonalL === 3) {
      return dispatch(SetWinner('o'))
    }
  }
}
