export const setBoard = (board) => {
  return {
    type: 'MAKE_BOARD',
    payload: {
      board
    }
  }
}

export const loadBoard = () => {
  return (dispatch, state) => {
    let tampung: {
       boardtampung : [],
       huruf: 'XO',
       huruf_X : 0,
       huruf_O : 0
    }
    for (let i = 0; i<= 3; i++){
      let arr = []
      for (let j = 0; j<=3; j++) {
        let random = Math.floor(Math.random()*huruf.length)
        if (random == 1 && huruf_x < 5){
          tampung.huruf_x ++
          arr.push('X')
        }
        else if (huruf_o == 5) {
          tampung.huruf_x++
          arr.push('O')
        }
      }
      tampung.boardtampung.push(arr)
    }
    return tampung.boardtampung
  }
}
