const initState = {
    title: 'Welcome to Tic Tac Toe',
    game: []
}

function rootReducer(state = initState, action) {
    switch(action.type) {
        case 'BOARD_UPDATE' :
            return {...state, gameState: action.payload}
        default:
            return state
    }
}

export default rootReducer