import React, { Component } from 'react';
import {Redirect,withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import * as auth from '../../Services/Authentication'
import history from '../../history/history'
class LogOut extends Component{
  
    render() {
        // return()
        try{
        return (<div>
            {this.props.loggedIn && <div className="container shadow justify-content-center">Logging you out
        </div>

            }
                {
                !this.props.loggedIn && 
                <div className="container shadow justify-content-center">Logged Out success
        </div>
                }
        </div>
            )
        } catch (error) {
            console.log(error)
        }
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
       
        console.log(this.props.loggedIn)
        setTimeout(() => {
            auth.logOut();
            this.props.logMeOut();
            history.push("/")
            console.log("loggout")
        }, 100);
        
    }
    componentDidUpdate() {
        
    }
}
const dispatch = (dispatch) => {
    return {
        logMeOut: () => dispatch({ type:"LogMeOut"}),
    }

}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn
    }
}
export default withRouter(connect(mapStateToProps,dispatch)(LogOut));