const images = (state = [], action) => {
    switch (action.type) {
        case 'SET_SHOW_IMAGES':
            return action.payload;
        default:
            return state
    }
}

export default images;