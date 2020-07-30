import React from 'react'

import './ViewLoans.scss'
import { useSelector } from 'react-redux'
import LoanViewer from './LoanViewer/LoanViewer'
const ViewLoan = React.memo(props => {

    
    const storeData = useSelector(state => state.loans);
    return (<div className="container border shadow">
        <div className="header">
            View Applied Loans

                </div>
        <div className="loan-container">
        {storeData.map(loan => {
           return <LoanViewer loanData={loan}></LoanViewer>
            
        })}</div>
    </div>)
});
export default ViewLoan;