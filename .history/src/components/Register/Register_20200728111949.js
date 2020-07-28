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
 
    render() {
        return (<div>
            Registration Page
            <div className={style.container}>
                <InputField Label="Name"></InputField>
                <InputField Label="Username"></InputField>
                <InputField Label="Password"></InputField>
                <InputField Label="Address"></InputField>
                <InputField Label="State"></InputField>
                <InputField Label="Country"></InputField>
                <InputField Label="Email"></InputField>
                <InputField Label="Pan"></InputField>
                <InputField Label="Contact No."></InputField>
                <InputField Label="Dob"></InputField>
                <InputField Label="Account Type"></InputField>

                <MyButton label="Register"></MyButton>








                
                </div>
            </div>)
        }
}
export default Register;