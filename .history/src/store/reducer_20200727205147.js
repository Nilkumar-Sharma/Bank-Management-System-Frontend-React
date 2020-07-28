initialState = {
    counter: 0
};

const rootReducer = (state = initialState, action) => {
    if (action.type == "Increment") {
        return { counter:state.counter + 1
    }
    
    }
    return state;

}