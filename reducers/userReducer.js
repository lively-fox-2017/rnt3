const initialState = {
  name: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_USER_NAME':
      return {...state, name: action.payload.name};
    default:
      return state;
  }
};

export default userReducer;
