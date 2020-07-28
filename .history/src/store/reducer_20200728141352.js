import * as auth '../Services/Authentication'
const initialState = {
    counter: 0,
    loggedIn: auth.isLoggedInBefore()
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LogMeIn":
            return {}
            

        case "INC": 
            return { counter: state.counter + 1 }
        case "DEC":
            return { counter: state.counter - 1 }
        default: 
            return state
        
        
}
}
export default rootReducer;