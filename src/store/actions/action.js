import * as actionTypes from './actionTypes'
import axios from 'axios'
// const alert = (type, message) => {
//     return {
//         type: actionTypes.SHOW_ALERT,
//         payload:{typ:type,message:message}
//     }
    
// }


// export const getLoansFromApi = (dispatch) => {
//     axios.get(`http://localhost:8000/api/loan`)
//         .then(res => {
//             // const persons = res.data;
//             console.log(res)
//             dispatch(actionTypes.LOAN_SAVE_FROM_API,res)

//             // this.setState({ persons });
//         }).catch(error=>console.log(error))
//         // .then(x => {
//         //     // LOAN_APPLY_SUCCESS
//         //     dispatch();


//         // })
//     // return {
//     //     type: actionTypes.LOAN_SAVE_FROM_API,
//     //     payload:{}
//     // }
    
// }