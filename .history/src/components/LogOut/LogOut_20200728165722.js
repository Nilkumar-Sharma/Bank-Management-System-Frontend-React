import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import * as auth from '../../Services/Authentication'
class LogOut extends Component{

    render() {
        // return()
        return <Redirect to='/login' />
    }
    componentDidMount() {
        auth.logOut();

        
    }
}
const dispatch = () => {
    return {
        logMeOut:()=>dispatch({type:"LogMeOut"}),
    }
}
export default connect(null,dispatch)(LogOut);