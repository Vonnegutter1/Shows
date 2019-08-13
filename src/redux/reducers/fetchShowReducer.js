const fetchShowReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SHOW_DETAILS':
            return action.payload;
        default:
            return state
    }
}

export default fetchShowReducer;