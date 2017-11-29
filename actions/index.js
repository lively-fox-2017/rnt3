export const fetchState = () => {
    return (dispatch) => {
        dispatch({
            type: 'FETCH_STATE'
        })
    }
}