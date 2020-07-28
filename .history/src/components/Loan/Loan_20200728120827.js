import React, { Component } from 'react';
import InputField from '../Shared/InputField/InputField'
import style from './LogIn.module.scss';
import MyButton from '../Shared/MyButton/MyButton'
/** 
As a Customer, I should be able to login so that I can apply and view the loan details 
Acceptance criteria: Customer should be able to apply loan in the system and it should be saved in the database. 
Capture fields like Loan Type, Loan Amount, Date, Rate of Interest and Duration of Loan
*/
class LogIn extends Component{
 
    render() {
        return (<div>
            LogIn Page
            <div className="container">
                {/* <InputField Label="Name"></InputField> */}
                <InputField Label="Loan Type"></InputField>
                <InputField Label="Loan Amount"></InputField>
                <InputField Label="Date"></InputField>
                <InputField Label="Rate of Interest"></InputField>
                <InputField Label="Duration of Loan"></InputField>
               
                <MyButton label="Apply Loan"></MyButton>








                
                </div>
            </div>)
        }
}
export default LogIn;