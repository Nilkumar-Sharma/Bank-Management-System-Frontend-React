import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import * as auth from '../../Services/Authentication'
import history from '../../history/history'
class LogOut extends Component{

    render() {
        // return()
        return("Loogging yout tour")
        // return <Redirect to='/login' />
    }
    componentDidMount() {
        auth.logOut();
        history.push("/login")
        console.log("pushed")

        
    }
}
const dispatch = () => {
    return {
        logMeOut:()=>dispatch({type:"LogMeOut"}),
    }
}
export default connect(null,dispatch)(LogOut);