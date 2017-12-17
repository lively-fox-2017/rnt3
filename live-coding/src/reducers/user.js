const defaultState = {
  user: 'Anonymus'
}

const userReducer = (state = defaultState, action) => {
  if (action.type === "USER" && action.payload) {
    return {...state, user: action.payload}
  }

  return state
}

export default userReducer
