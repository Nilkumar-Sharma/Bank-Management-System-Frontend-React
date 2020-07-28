import React, { Component } from 'react';
import InputField from '../Shared/InputField/InputField'
import style from './Register.module.scss';
import MyButton from '../Shared/MyButton/MyButton'
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
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        return (<div>
            Registration Page
            <div className="container">
                <InputField Label="Name" name="Name"></InputField>
                <InputField Label="Username" name="Username"></InputField>
                <InputField Label="Password" name="Password"></InputField>
                <InputField Label="Address" name="Address"></InputField>
                <InputField Label="State" name="State"></InputField>
                <InputField Label="Country" name="Country"></InputField>
                <InputField Label="Email" name="Email"></InputField>
                <InputField Label="Pan" name="Pan"></InputField>
                <InputField Label="Contact No." name=" No."></InputField>
                <InputField Label="Dob" name="Dob"></InputField>
                <InputField Label="Account Type" name=" Type"></InputField>
                <MyButton label="Register" name="Register"></MyButton>
                </div>
            </div>)
        }
}
export default Register;