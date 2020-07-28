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
            <InputField Label="Name" handleChange={this.handleInputField}></InputField>
            <InputField Label="Password" handleChange={this.handleInputField}></InputField>
            <InputField Label="Address" handleChange={this.handleInputField}></InputField>
            <InputField Label="State" handleChange={this.handleInputField}></InputField>

            <InputField Label="Country" handleChange={this.handleInputField}></InputField>
            <InputField Label="Email" handleChange={this.handleInputField}></InputField>
            <InputField Label="Pan" handleChange={this.handleInputField}></InputField>
            <InputField Label="Contact" handleChange={this.handleInputField}></InputField>
            <InputField Label="DOB" handleChange={this.handleInputField}></InputField>

        </div>)
    }
}
export default UpdateProfile;