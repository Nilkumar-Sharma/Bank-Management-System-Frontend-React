import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
class LogOut extends Component{
    render() {
        // return()
        return <Redirect to='/login' />
    }
}
const dispatch = () => {
    return {
        logMeOut:()=>dispatch({type:"LogMeOut"}),
    }
}
export default connect(null,dispatch)(LogOut);