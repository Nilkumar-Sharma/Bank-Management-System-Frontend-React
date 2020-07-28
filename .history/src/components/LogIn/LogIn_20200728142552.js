import React, { Component } from 'react';
import InputField from '../Shared/InputField/InputField'
import style from './LogIn.module.scss';
import MyButton from '../Shared/MyButton/MyButton'
import * as auth from '../../Services/Authentication'
import {connect} from 'react-redux'
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
    constructor(props) {
        super(props);
        this.state={loggedIn:false,inProgress:false}
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    logInHandler = () => {
        if (auth.logIn(this.state)) {

            //
        } else {
            
        }
    }
 
    render() {
        return (<div>
            LogIn Page
            <div className="container col-offset-2 ">
                <InputField Label="Username" name="UserName" changes={this.handleChange}></InputField>
                <InputField Label="Password" name="Password" changes={this.handleChange}></InputField>
                <MyButton label="Log In" clicked={this.logInHandler}></MyButton>
                </div>
            </div>)
        }
}
const mapStateToProps=()=>{

}
const dispatch = () =>{
    
}
export default connect()(LogIn);