import * as actionTypes from './actionTypes'
import axios from 'axios'



export const getProfileFromApi = () => {
    return (dispatch) => {
        return axios.get('http://localhost:8000/api/user/').then(x => {
            console.log(x) 
            dispatch({ type: actionTypes.UPDATE_PROFILE_SUCCESS, payload: x.data })


        }).catch(err=>console.log(err))
    }
}
export const updateProfileFromApi = (details) => {
    console.log("dispatch details")
    console.log(details)

    return (dispatch) => {
        return axios.patch('http://localhost:8000/api/user/',details).then(x => {
            // dispatch({ type: actionTypes.UPDATE_PROFILE_SUCCESS, payload: x.data })
            dispatch(getProfileFromApi)
        }).catch(err => console.log(err))
    }
}