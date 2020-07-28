import React, { Component } from 'react'
import InputField from '../Shared/InputField/InputField'
/**
 * As a Customer, I should be able to login so that I can update my account details in the system 
 * Acceptance criteria: When the Customer logs in, he should be able to update his account details.
 *  extra  Name, Username, Password, Address, State, Country, Email Address, PAN, Contact No, DOB,
 * Account Type etc
 */
class UpdateProfile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    handleInputField(event) {
        this.setState({
            [event.target.name]:event.target.value
        });
        
    }

    render() {
        return (<div>
            Update Profile Page
            <InputField Label="Name"></InputField>
            <InputField Label="Password"></InputField>
            <InputField Label="Address"></InputField>
            <InputField Label="State"></InputField>

            <InputField Label="Country"></InputField>
            <InputField Label="Email"></InputField>
            <InputField Label="Pan"></InputField>
            <InputField Label="Contact"></InputField>
            <InputField Label="DOB"></InputField>

        </div>)
    }
}
export default UpdateProfile;