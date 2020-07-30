import React, { Component } from 'react';
import InputField from '../Shared/InputField/InputField'
import './Loan.scss';
import MyButton from '../Shared/MyButton/MyButton'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions/actionTypes'
/** 
As a Customer, I should be able to login so that I can apply and view the loan details 
Acceptance criteria: Customer should be able to apply loan in the system and it should be saved in the database. 
Capture fields like Loan Type, Loan Amount, Date, Rate of Interest and Duration of Loan
*/
class Loan extends Component{
    constructor(props) {
        super(props);
        this.state={}
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    clickHandler = () => {
        //make api call
        this.props.onApplyLoan(this.state);
        // LOAN_APPLY_INITIATE
        console.log(this.state)
    }
    render() {
        try{
        return (<div>
            <div className="container border shadow">
                <div className="header">
                   Apply Loan

                </div>
                <div className="row mt-5">
                <div className="element1 col-lg-6 col-md-5">
                <InputField type="select" options={["Student Loans","Car Loans","Appliance Loan"]}  Label="Type" name="Type" changes={this.handleChange}></InputField>
                </div>
                <div className="element1 col-lg-6 col-md-5">
                <InputField Label="Amount" name="Amount" changes={this.handleChange}></InputField>
                </div>
                <div className="element1 col-lg-6 col-md-5">
                <InputField Label="Date" name="Date" changes={this.handleChange}></InputField>
                </div>
                <div className="element1 col-lg-6 col-md-5">
                <InputField Label="Rate of Interest" name=" Rate of Interest" changes={this.handleChange}></InputField>
                </div>
                <div className="element1 col-lg-6 col-md-5">
                        <InputField Label="Duration" name="Duration" changes={this.handleChange}></InputField>
           </div>
<div className="button1 offset-12 col-12">
                        <MyButton  label="Apply" clicked={this.clickHandler}></MyButton>
                        </div>
                </div>
                </div>
            </div>)
        } catch (error) {
            console.log(error)
        return (<div>SomeError has Happened,Contact Admin</div>) }
        }
}
const hereToState = (dispatch) => {
    return {
        onApplyLoan:(payload)=>dispatch({type:actionTypes.LOAN_APPLY_INITIATE,payload})
    }
}
export default  connect(null,hereToState)(Loan);