const defaultState = {
  user: ''
}

const userReducer = (state = defaultState, action) => {
  if (action.type === "USER") {
    return {...state, user: action.payload}
  }

  return state
}

export default userReducer
