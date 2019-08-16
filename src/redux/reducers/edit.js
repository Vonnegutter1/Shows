const editShow = (state = [], action) => {
    if ('EDIT_SHOW' === action.type) {
        console.log(action.payload);
        return action.payload
    }
    return state;
}

export default editShow;