import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import * as auth from '../../Services/Authentication'
import history from '../../history/history'
class LogOut extends Component{
    // constructor(props, context) {
    //     super(props, context);
    //     //do something...
    // }
    render() {
        // return()
        return (<div>Loogging yout tour {this.props.loggedInn?"Trueee":"Fakksee"}</div>)
        // return <Redirect to='/login' />
    }
    constructor(props) {
    super(props)
        // setTimeout(() => {
         
        // this.props.logMeOut()

            // history.push("/")
            // console.log("pushed")
            // this.context.history.push('/login')
        // }, 3000);
        
    }
    componentDidMount() {
        console.log(this.props.loggedInn)
        setTimeout(() => {
            auth.logOut();
            this.props.logMeOut();
            console.log("loggout")
        }, 3000);
        
    }
    componentDidUpdate() {
        
    }
}
const dispatch = () => {
    return {
        logMeOut: () => dispatch({ type:"LogMeOut"}),
    }

}
const mapStateToProps = (state) => {
    return {
        loggedInn: state.loggedIn
    }
}
export default connect(mapStateToProps,dispatch)(LogOut);