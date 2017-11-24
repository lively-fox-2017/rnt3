export const INITBOARD = 'INITBOARD'
export const CHANGEVALUE = 'CHANGEVALUE'

export const initBoard = () => {
  let initialValue = []
  let count = [5, 5]
  let member = ['X', 'O']
  for (let i = 0; i < 3; i++) {
    let column = [];
    for (let j = 0; j < 3; j++) {
      column.push('----')
    }
    initialValue.push(column);
  }
  return {
    type: INITBOARD,
    payload: {
      initialValue
    }
  }
}

export const changeValue = (row, col, value) => {
  let initialValue = []
  let count = [5, 5]
  let member = ['X', 'O']
  for (let i = 0; i < 3; i++) {
    let column = [];
    for (let j = 0; j < 3; j++) {
      column.push('')
    }
    initialValue.push(column);
  }
  initialValue[row][col] = (value[row][col] == 'X') ? 'O' : 'X'
  return {
    type: INITBOARD,
    payload: {
      initialValue
    }
  }
}
