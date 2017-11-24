const defaultState = {
  user: 'a'
}

const User = (state=defaultState, action) => {
  switch (action.type) {
    case 'SetUser':
      var data = {...state, user: action.payload.user}
      console.log(data)
      return data
    default :
      return state
  }
}

export default User
