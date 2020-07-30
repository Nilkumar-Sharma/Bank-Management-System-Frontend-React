import React, { Component } from 'react';
import InputField from '../Shared/InputField/InputField'
import  './LogIn.scss';
import MyButton from '../Shared/MyButton/MyButton'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions/actionTypes'
import * as validators from '../Shared/Validators'
/** 
 *  As a Customer, I should be able to register my details in the system so that I can 
 * login into the system Acceptance criteria: Customer should be able register the details 
 * in the system and it should be saved in the database. Customer should be able to login with 
 * a User Id and Password that exists in database. 
 * On clicking logout the session should be invalidated and login page must be displayed Capture the 
 * details like Name, Username, Password, Address, State, Country, Email Address, PAN, Contact No, DOB, 
 * Account Type etc
*/
class LogIn extends Component{
    validators = [validators.HOCrequired("USername is required"),(value)=>(value.trim().length>5?true:"Minimum Length is 5")];
    constructor(props) {
        super(props);
        this.state = {
        }
        // this.validators = [(event) => {
        //     if (event.target.value < 4) {
        //         return "Min Length 4 is required"
        //     }
        // }]
    }
    handleChange = (event,error) => {
    
        this.setState({ [event.target.name]: event.target.value });
        console.log(error)
    }
    logInHandler = () => {
        // if (auth.logIn(this.state)) {
        this.props.logInSaga(this.state)
            // this.props.onLoggedIn(this.state)
        // }else {
            
        // }
    }
 
    render() {
        try{
        return (<div>
            {/* status {this.props.loggedIn==true?'YEsy':'no'} */}
           
          
            {this.props.loggedIn &&
                <div className="log-in-container  mt-5 mb-5  border clearfix shadow ">
                <div className="alreadyLoggedIn">
                    Already logged in 
                </div>
                </div>
                
        }
            { !this.props.loggedIn &&
                <div className="container  mt-5 mb-5  border clearfix shadow">
                <h5 className="header1">Log In Page
            </h5> 
                <div className="row justify-content-center mt-3">
                    <InputField Label="Username" name="UserName" validators={this.validators} changes={this.handleChange}></InputField>
                </div>
                <div className="row justify-content-center">
                    <InputField Label="Password" name="Password" validators={this.validators} changes={this.handleChange}></InputField>
                </div>
                {/* <div className="new-user">
                    New User ? ,click here
                </div> */}
                <div className="mb-4">
                    <MyButton label="Log In" clicked={this.logInHandler}></MyButton>
                </div>
                </div>
            }
            </div>)
        } catch (error) {
            console.log(error)
        return (<div>SomeError has Happened,Contact Admin</div>) }
        }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        loggedIn:state.loggedIn
    }
}
const dispatch = (dispatch) => {
    return {
        onLoggedIn: (payload) => {
            // console.log(payload)
            dispatch({ type: "LogMeIn", payload })
        },
        logInSaga: (payload) => {
            dispatch({type:actionTypes.AUTH_INITIATE,payload})
        }
    
    }
}
export default connect(mapStateToProps,dispatch)(LogIn);