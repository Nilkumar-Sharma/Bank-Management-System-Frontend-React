import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import * as auth from '../../Services/Authentication'
import history from '../../history/history'
class LogOut extends Component{
    constructor(props, context) {
        super(props, context);
        //do something...
    }
    render() {
        // return()
        return("Loogging yout tour")
        // return <Redirect to='/login' />
    }
    componentDidMount() {
        setTimeout(() => {
            auth.logOut();
            this.props.logMeOut();
            console.log("pushed")
            // this.context.history.push('/login')
        }, 3000);
        
    }
}
const dispatch = () => {
    return {
        logMeOut:()=>dispatch({type:"LogMeOut"}),
    }
}
export default connect(null,dispatch)(LogOut);