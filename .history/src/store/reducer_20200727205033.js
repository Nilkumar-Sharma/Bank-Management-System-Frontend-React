initialState = {
    counter: 0
};

const rootReducer = (state = initialState, action) => {
    if (action.type == "Increment") {
        return state.counter + 1;
        }

}