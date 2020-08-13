import { delay } from 'redux-saga/effects'
import { takeEvery, put,call } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'
import axios from 'axios'
export function* watchAuth() {
    yield takeEvery(actionTypes.SHOW_ALERT_INITIATE, checkAlert);
    yield takeEvery(actionTypes.AUTH_INITIATE, authenticateUser);
    yield takeEvery(actionTypes.UPDATE_PROFILE_INITIATE, updateProfile);
    yield takeEvery(actionTypes.LOAN_APPLY_INITIATE, applyLoan);
    yield takeEvery(actionTypes.LOAN_GET_API_INITIATE, getLoansFromApi);


}
function* checkAlert(payload){
    yield put({ type: actionTypes.SHOW_ALERT_SHOW,payload:payload })
    yield delay(3 * 1000);
    yield put({ type: actionTypes.SHOW_ALERT_HIDE})
}

function* authenticateUser(payload) {
    yield payload = payload.payload;
    yield console.log(payload)
    // // yield 
    try {
        const  {data}  = yield sendDataUser((payload))
        if (data && data.token!=null) {
            console.log(data.token)
            //TODO save token in localstorage
            yield put({ type: actionTypes.AUTH_SUCCESS })
        } else {
            yield put({ type: actionTypes.SHOW_ALERT_INITIATE, payload: { typ: 'danger', message: 'Invalid Credentials' } })
            yield({ type: actionTypes.AUTH_FAILED })
        }
    } catch (error) {
    }
}
function* updateProfile(action) {
    yield console.log(action)
    const payload = action.payload
    try {
        // TODO make api call and save it to local session
        yield put({ type: actionTypes.UPDATE_PROFILE_SUCCESS, payload })
        yield put({ type: actionTypes.SHOW_ALERT_INITIATE, payload: { typ: 'success', message: 'Profile Updated Successfully' } })
    } catch (err) {
        yield put({type:actionTypes.UPDATE_PROFILE_FAILED})
    }
    
}
function* applyLoan(action) {
    yield console.log(action)
    try {
        // TODO make api call
        let  data  = yield sendDataLoan(action.payload)
        console.log(data)
        if(data==null)throw new Error("Unable to Apply for loan")
        yield put({ type: actionTypes.LOAN_APPLY_SUCCESS, payload:action.payload })
        yield put({ type: actionTypes.SHOW_ALERT_INITIATE, payload: { typ: 'success', message: 'Loan Applied Successfully' } })
    } catch (err) {
        yield put({ type: actionTypes.LOAN_APPLY_ERROR })
    }

    
}
function getData() {
    
    return axios.get(`http://localhost:8000/api/loan`)
}
function sendDataLoan(data) {
    return axios.post(
        `http://localhost:8000/api/loan`, data
    )
}

function sendDataUser(data) {
    console.log("http://localhost:8000/api/user/login")
    return axios.post(
        `http://localhost:8000/api/user/login`, data
    )
}
function* getLoansFromApi(action) {
    try {
        let { data } = yield call(getData)
        yield put({ type: actionTypes.LOAN_SAVE_FROM_API, payload: data })
        // yield (showMessage("Loans Feteched From Api"))

    } catch (e) {
        console.log(e)
        
    }
   
      
}

function showMessage(message, typ = "success") {
     put({ type: actionTypes.SHOW_ALERT_INITIATE, payload: { typ:typ, message: 'Loan Applied Successfully' } })

    //  put({ type: actionTypes.LOAN_APPLY_SUCCESS, payload: action.payload })

}