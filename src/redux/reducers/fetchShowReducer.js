const fetchShowReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SHOW_DETAILS':
            return action.payload[0];
        default:
            return state
    }
}

export default fetchShowReducer;