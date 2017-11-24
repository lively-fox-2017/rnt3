const tictac= {
    gameArr: []
}

const tictacReducer = (state = tictac, actions) =>{
    switch (actions.type) {
        case 'GET_X':
            return state
        case 'GET_O': 
            return state
        default: 
            return state
    }

}

export default tictacReducer