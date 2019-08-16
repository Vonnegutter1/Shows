const addShowData = (state=[], action) => {
    if ('SET_SHOW' === action.type) {
        console.log(action.payload);
        return action.payload
    }
    return state;
}

export default addShowData;