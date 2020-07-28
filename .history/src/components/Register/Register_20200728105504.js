import React, { Component } from 'react';
import InputField from '../Shared/InputField/InputField'
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
            <div className="container">
                <InputField label="Name"></InputField>
                <InputField label="Username"></InputField>
                <InputField label="Password"></InputField>
                <InputField label="Address"></InputField>
                <InputField label="State"></InputField>
                <InputField label="Country"></InputField>
                <InputField label="Email"></InputField>
                <InputField label="Pan"></InputField>
                <InputField label="Contact No."></InputField>
                <InputField label="Dob"></InputField>
                <InputField label="Account Type"></InputField>








                
                </div>
            </div>)
        }
}
export default Register;