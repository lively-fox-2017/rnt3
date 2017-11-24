export const random = (value) => {
  // console.log('masuk ga' value)
  return {
    type: 'RANDOM',
    value
  }
};

const halo = () => {
  console.log()
  return 'test'
}

export const randomXO = () => {
  console.log('masuk pertama')
  return (dispatch) => {
    console.log('masuk kedua')
    return halo()
    // let XO = ['X','O']
    // let arr = [];
    // let counterX = 0;
    // let counterO = 0;
    // let mid = Math.floor((rowCol*rowCol)/2)
    //
    // for (var i = 0; i < rowCol; i++) {
    //   arr.push([])
    //   for (var j = 0; j < rowCol; j++) {
    //     var random = XO[Math.floor(Math.random()*2)];
    //     if(random == 'X'){
    //       if(counterX==mid){
    //         arr[i].push('O')
    //         counterO++
    //       }
    //       else{
    //         arr[i].push('X');
    //         counterX++
    //       }
    //     }
    //     else{
    //       if(counterO==mid){
    //         arr[i].push('X')
    //         counterX++
    //       }
    //       else{
    //         arr[i].push('O');
    //         counterO++
    //       }
    //     }
    //   }
      dispatch(random(arr))
    // }
  };
};
