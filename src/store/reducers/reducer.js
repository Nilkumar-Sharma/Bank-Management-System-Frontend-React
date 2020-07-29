import * as auth from '../../Services/Authentication.js'
import { act } from 'react-dom/test-utils';
import * as actionTypes from '../actions/actionTypes'
const initialState = {
    counter: 0,
    loggedIn: auth.isLoggedInBefore(),
    showAlert: { typ:'hide',message:"hellllo"},
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_ALERT_SHOW:
            return { ...state, showAlert: action.payload.payload }
        case actionTypes.SHOW_ALERT_HIDE:
            return { ...state, showAlert:{...state.showAlert,typ:'hide'} }
        case "ShowAlert":
            return {...state,showAlert:action.payload}
        case "LogMeIn":
            return { ...state, loggedIn: true }
        case "LogMeOut":
            return { ...state, loggedIn: false }        
        case "INC": 
            return { ...state,counter: state.counter + 1 }
        case "DEC":
            return { ...state,counter: state.counter - 1 }
        default: 
            return state
        
        
}
}
export default rootReducer;