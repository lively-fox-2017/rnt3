export const random = (value) => {
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
    return
      dispatch(random('arr'))
  };
};
