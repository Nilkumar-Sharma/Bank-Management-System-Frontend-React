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
            name:""
        }
    }
    handleInputField(event) {
        console.log(event.target.name);
        this.setState({
            name:"asdsd"
            // [event.target.name]:event.target.value
        });
        // console.log(this.state)
        
    }

    render() {
        return (<div>
            Update Profile Page
            <InputField Label="Name" name="Name" changes={this.handleInputField}></InputField>
            <InputField Label="Password" changes={this.handleInputField}></InputField>
            <InputField Label="Address" changes={this.handleInputField}></InputField>
            <InputField Label="State" changes={this.handleInputField}></InputField>

            <InputField Label="Country" changes={this.handleInputField}></InputField>
            <InputField Label="Email" changes={this.handleInputField}></InputField>
            <InputField Label="Pan" changes={this.handleInputField}></InputField>
            <InputField Label="Contact" changes={this.handleInputField}></InputField>
            <InputField Label="DOB" changes={this.handleInputField}></InputField>

        </div>)
    }
}
export default UpdateProfile;