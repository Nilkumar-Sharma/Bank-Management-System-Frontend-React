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
            // name:""
        }
        this.handleInputField.bind(this);
    }
    // setS(data) {
        // console.log("daata")
        // this.setState(data)
    // }
     handleInputField = (event)=> {
        this.setState({
                [event.target.name]:event.target.value
        },()=>console.log(this.state));
        //  console.log(this.eve)
        
    }

    render() {
        return (<div>
            {this.state.Name}
            Update Profile Page
            <InputField Label="Name" name="Name" changes={this.handleInputField}></InputField>
            <InputField Label="Password" name="Password" changes={this.handleInputField}></InputField>
            <InputField Label="Address" name="Address" changes={this.handleInputField}></InputField>
            <InputField Label="State" name="State" changes={this.handleInputField}></InputField>

            <InputField Label="Country" name="Country" changes={this.handleInputField}></InputField>
            <InputField Label="Email" name="Email" changes={this.handleInputField}></InputField>
            <InputField Label="Pan" name="Pan" changes={this.handleInputField}></InputField>
            <InputField Label="Contact" name="Contact" changes={this.handleInputField}></InputField>
            <InputField Label="DOB" name="DOB" changes={this.handleInputField}></InputField>

        </div>)
    }
}
export default UpdateProfile;