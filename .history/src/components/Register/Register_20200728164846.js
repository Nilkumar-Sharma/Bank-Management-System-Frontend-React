import React, { Component } from 'react';
import InputField from '../Shared/InputField/InputField'
import style from './Register.module.scss';
import MyButton from '../Shared/MyButton/MyButton'
import * as auth from '../../Services/Authentication'
import { connect } from 'react-redux' 
import { history } from "history";
import customHistory from '../../App';
/** 
 *  As a Customer, I should be able to register my details in the system so that I can 
 * login into the system Acceptance criteria: Customer should be able register the details 
 * in the system and it should be saved in the database. Customer should be able to login with 
 * a User Id and Password that exists in database. 
 * On clicking logout the session should be invalidated and login page must be displayed Capture the 
 * details like Name, Username, Password, Address, State, Country, Email Address, PAN, Contact No, DOB, 
 * Account Type etc

*/
class Register extends Component{
    
    handleChange = (event) => {
        // let history = useHistory();
        // console.log(history )

        this.setState({ [event.target.name]: event.target.value });
    }
    registrationHandler = () => {
        console.log(this.state)
        if (auth.register(this.state)) {
            // TODO
            //alert or redirect
        } else {

        }
    }
    render() {
        return (<div>
            Registration Page
            <div className="container">
                <InputField Label="Name" name="Name" changes={this.handleChange}></InputField>
                <InputField Label="Username" name="Username" changes={this.handleChange}></InputField>
                <InputField Label="Password" name="Password" changes={this.handleChange}></InputField>
                <InputField Label="Address" name="Address" changes={this.handleChange}></InputField>
                <InputField Label="State" name="State" changes={this.handleChange}></InputField>
                <InputField Label="Country" name="Country" changes={this.handleChange}></InputField>
                <InputField Label="Email" name="Email" changes={this.handleChange}></InputField>
                <InputField Label="Pan" name="Pan" changes={this.handleChange}></InputField>
                <InputField Label="Contact No." name=" No." changes={this.handleChange}></InputField>
                <InputField Label="Dob" name="Dob" changes={this.handleChange}></InputField>
                <InputField Label="Account Type" name=" Type" changes={this.handleChange}></InputField>
                <MyButton label="Register" name="Register" clicked={this.registrationHandler}></MyButton>
                </div>
            </div>)
        }
}
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
    
}
export default  connect(mapStateToProps,null)(Register);