import React, { Component } from 'react';
import InputField from '../Shared/InputField/InputField'
import style from './Loan.module.scss';
import MyButton from '../Shared/MyButton/MyButton'
/** 
As a Customer, I should be able to login so that I can apply and view the loan details 
Acceptance criteria: Customer should be able to apply loan in the system and it should be saved in the database. 
Capture fields like Loan Type, Loan Amount, Date, Rate of Interest and Duration of Loan
*/
class Loan extends Component{
 
    render() {
        return (<div>
            Loan Page
            <div className="container">
                {/* <InputField Label="Name"></InputField> */}
                <InputField type="select" options={["A","B","C","D"]}  Label="Loan Type" name="Loan Type"></InputField>
                <InputField Label="Loan Amount" name="Loan Amount"></InputField>
                <InputField Label="Date" name="Date"></InputField>
                <InputField Label="Rate of Interest" name=" Rate of Interest"></InputField>
                <InputField Label="Duration of Loan"></InputField>
               
                <MyButton label="Apply"></MyButton>
                
                </div>
            </div>)
        }
}
export default Loan;