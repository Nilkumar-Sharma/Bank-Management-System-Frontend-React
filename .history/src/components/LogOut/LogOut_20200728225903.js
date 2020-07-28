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
        return (<div>Loogging yout tour {this.props.isLoggedIn?"Trueee":"Fakksee"}</div>)
        // return <Redirect to='/login' />
    }
    componentDidMount() {
        // setTimeout(() => {
            auth.logOut();
            this.props.logMeOut();

            // history.push("/")
            // console.log("pushed")
            // this.context.history.push('/login')
        // }, 3000);
        
    }
}
const dispatch = () => {
    return {
        logMeOut: () => dispatch({ type:"LogMeOut"}),
    }

}
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.loggedIn
    }
}
export default connect(null,dispatch)(LogOut);