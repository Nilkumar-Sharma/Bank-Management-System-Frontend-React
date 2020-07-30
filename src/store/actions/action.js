import * as actionTypes from './actionTypes'
const alert = (type, message) => {
    return {
        type: actionTypes.SHOW_ALERT,
        payload:{typ:type,message:message}
    }
    
}

