import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
class LogOut extends Component{
    render() {
        // return()
        return <Redirect to='/login' />
    }
}
export default LogOut;