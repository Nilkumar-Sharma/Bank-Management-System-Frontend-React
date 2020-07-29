import { delay } from 'redux-saga/effects'
import { takeEvery, put } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'
export function* watchAuth() {
    yield takeEvery(actionTypes.SHOW_ALERT_INITIATE, checkAlert);
}

function* checkAlert(payload){
    yield console.log("from redux saga")
    yield put({ type: actionTypes.SHOW_ALERT_SHOW,payload:payload })
    yield delay(3 * 1000);
    yield put({ type: actionTypes.SHOW_ALERT_HIDE})


    
}