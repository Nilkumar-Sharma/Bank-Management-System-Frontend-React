import React from 'react'
import InputField from '../../../Shared/InputField/InputField' 
import './LoanViewer.scss'
const LoanViewer = React.memo(props => {
    
    try {
        return (<div class="container container1">
            <div className="card card1">
                <div className="card-header">   
                    Loan 
                     </div>
                <div className="row mt-4 ml-4">
                    <div className="loan-viewer-inputfield col-lg-3 col-md-5">
                        <InputField type="select" options={["Student Loans", "Car Loans", "Appliance Loan"]} Label="Type" value={props.loanData['Loan Type']} name="Type"  readOnly="true" ></InputField>
                    </div>
                    <div className="loan-viewer-inputfield col-lg-3 col-md-5">
                        <InputField Label="Amount" value={props.loanData.Amount} name="Amount"  readOnly="true" ></InputField>
                    </div>
                    <div className="loan-viewer-inputfield col-lg-3 col-md-5">
                        <InputField Label="Date" value={props.loanData.Date} name="Date"  readOnly="true" ></InputField>
                    </div>
                    <div className="loan-viewer-inputfield col-lg-3 col-md-5">
                        <InputField Label="Rate of Interest" value={props.loanData['Rate of Interest']} name=" Rate of Interest"  readOnly="true" ></InputField>
                    </div>
                    <div className="loan-viewer-inputfield col-lg-3 col-md-5">
                        <InputField Label="Duration" value={props.loanData.Duration} name="Duration"  readOnly={"true"} ></InputField>
                    </div>
                   
                </div>
            </div>
        </div>)
    } catch (error) {
        console.log(error)
        return (<div>SomeError has Happened,Contact Admin</div>)
    }
    
});
export default LoanViewer;