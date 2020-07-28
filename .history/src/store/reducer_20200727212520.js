const initialState = {
    counter: 0
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
    case "INC": 
            return { counter: state.counter + 1 }
        case "DEC":
            return { counter: state.counter - 1 }
        default: // need this for default case
            return [counter=0] 
        // return 2
}
}
export default rootReducer;