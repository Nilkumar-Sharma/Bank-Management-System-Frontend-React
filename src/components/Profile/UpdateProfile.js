import React, { Component } from 'react'
import InputField from '../Shared/InputField/InputField'
import MyButton from '../Shared/MyButton/MyButton';
import {connect} from 'react-redux'
import './UpdateProfile.scss'
import * as actionTypes from '../../store/actions/actionTypes'
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
    handleUpdateClick = ()=>{
        this.props.onChangeProfile(this.state);
    }

    render() {
        return (<div>
            {this.state.Name}
            <div className="container border shadow pr-5">
                <div className="header">
                    Update Profile Page

                </div>
                <div className="row mt-5 ">
                <div className="element1 col-4">
                    <InputField Label="Name" name="UserName" value={this.props.user.UserName} changes={this.handleInputField}></InputField>
                </div>
                <div className="element1 col-4">
                <InputField Label="Password" name="Password" value={this.props.user.Password} changes={this.handleInputField}></InputField>
            </div>
            <div className="element1 col-4">
            <InputField Label="Address" name="Address" value={this.props.user.Address} changes={this.handleInputField}></InputField>
        </div>
        <div className="element1 col-4">
            <InputField Label="State" name="State" value={this.props.user.State}   changes={this.handleInputField}></InputField>
            </div>
            <div className="element1 col-4">

            <InputField Label="Country" name="Country" value={this.props.user.Country}    changes={this.handleInputField}></InputField>
            </div>
            <div className="element1 col-4">
            <InputField Label="Email" name="Email" value={this.props.user.Email}   changes={this.handleInputField}></InputField>
            </div>
            <div className="element1 col-4">
            <InputField Label="Pan" name="Pan" value={this.props.user.Pan}   changes={this.handleInputField}></InputField>
            </div>
            <div className="element1 col-4">
            <InputField Label="Contact" name="Contact" value={this.props.user.Contact}   changes={this.handleInputField}></InputField>
            </div>
            <div className="element1 col-4">
            <InputField Label="DOB" name="DOB" value={this.props.user.DOB} changes={this.handleInputField}></InputField>
            </div>
            <div className="button1  offset-9">
                        <MyButton label="Update" clicked={this.handleUpdateClick} ></MyButton>
                    </div></div>
            </div>
        </div>)
    }
}
const mapStateToProps = state => {
    console.log(state.user)
    return {
        user:state.user
    }
}
const mapPropToState = dispatch => {
    return {
        onChangeProfile: (payload) => dispatch({ type: actionTypes.UPDATE_PROFILE_INITIATE, payload })

    }
}
export default  connect(mapStateToProps,mapPropToState)(UpdateProfile);