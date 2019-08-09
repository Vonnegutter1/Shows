const addShowData = (state=[], action) => {
    if ('ADD_SHOW' === action. type) {
        console.log(action.payload);
        return action.payload
    }
    return state;
}

export default addShowData;