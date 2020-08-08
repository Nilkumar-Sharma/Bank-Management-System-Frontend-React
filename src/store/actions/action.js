import * as actionTypes from './actionTypes'
import axios from 'axios'
// const alert = (type, message) => {
//     return {
//         type: actionTypes.SHOW_ALERT,
//         payload:{typ:type,message:message}
//     }
    
// }


export const getLoansFromApi = () => {
    console.log("a[pi function callled")
    // // axios.get()
    return (dispatch) => {
        
    // // return dispatch=>{
    // //     console.log("link http://localhost:8000/api/loan")
    return axios.get(`http://localhost:8000/api/loan`)
        .then(res => {
            // const persons = res.data;
            console.log("axios got data")
            console.log(res.data)
            dispatch({ type: actionTypes.LOAN_SAVE_FROM_API, payload: res.data })
        },
                err => {
                    console.log(err)
                }
            // this.setState({ persons });
        )
        //.catch(error => console.log(error))
      
    }
    // // dissspatch(actionTypes.SHOW_ALERT_INITIATE, { typ: 'success', message: "thunk wokring" })


    return (dispatch, getState) => {
        console.log("inside")
     return   setTimeout(() => {
            dispatch(actionTypes.SHOW_ALERT_INITIATE,{typ:'success' ,message:"thunk wokring"})
            console.log("thunk wkring")
        }, 100);
    }
}

