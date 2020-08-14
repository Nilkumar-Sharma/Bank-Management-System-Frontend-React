import * as actionTypes from './actionTypes'
import axios from 'axios'
// const alert = (type, message) => {
//     return {
//         type: actionTypes.SHOW_ALERT,
//         payload:{typ:type,message:message}
//     }
    
// }


export const getLoansFromApi = () => {
    return (dispatch) => {
    return axios.get(`http://localhost:8000/api/loan`)
        .then(res => {
            dispatch({ type: actionTypes.LOAN_SAVE_FROM_API, payload: res.data })
        },
                err => {
                    console.log(err)
                }
        )
    }
}

