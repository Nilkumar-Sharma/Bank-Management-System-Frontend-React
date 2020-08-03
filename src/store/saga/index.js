import { delay } from 'redux-saga/effects'
import { takeEvery, put } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'
export function* watchAuth() {
    yield takeEvery(actionTypes.SHOW_ALERT_INITIATE, checkAlert);
    yield takeEvery(actionTypes.AUTH_INITIATE, authenticateUser);
    yield takeEvery(actionTypes.UPDATE_PROFILE_INITIATE, updateProfile);
    yield takeEvery(actionTypes.LOAN_APPLY_INITIATE, applyLoan);

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
        if (payload.UserName.trim() === "customer" && payload.Password.trim() === "customer") {
            yield localStorage.setItem("BMS", payload);
            yield put({ type: actionTypes.SHOW_ALERT_INITIATE, payload: { typ: 'success', message: 'Logged In Successfully' } })
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
        // TODO make api call and save it to local session
        yield put({ type: actionTypes.LOAN_APPLY_SUCCESS, payload:action.payload })
        yield put({ type: actionTypes.SHOW_ALERT_INITIATE, payload: { typ: 'success', message: 'Loan Applied Successfully' } })
    } catch (err) {
        yield put({ type: actionTypes.LOAN_APPLY_ERROR })
    }

    
}