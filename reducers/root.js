const initState = {
    title: 'Welcome to Tic Tac Toe',
    game: []
}

function rootReducer(state = initState, action) {
    switch(action.type) {
        case 'FETCH_STATE' :
            return state
        default:
            return state
    }
}

export default rootReducer