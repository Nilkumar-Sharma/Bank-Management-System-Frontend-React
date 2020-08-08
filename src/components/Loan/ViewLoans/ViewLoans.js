import React,{useEffect} from 'react'

import './ViewLoans.scss'
import { useSelector,useDispatch } from 'react-redux'
import LoanViewer from './LoanViewer/LoanViewer'
import { getLoansFromApi } from '../../../store/actions/action'
import * as actionTypes from '../../../store/actions/actionTypes'

const ViewLoan = React.memo(props => {

    
    const storeData = useSelector(state => state.loans);
    // const dispatch =
    const dispatch = useDispatch();
    useEffect(() => {
        
        console.log("getting loan api")
        dispatch(getLoansFromApi())
        // dispatch(a)
        // dispatch({ type: actionTypes.LOAN_GET_API_INITIATE ,action:{}})


    },[]);
    return (<div className="container border shadow">
        <div className="header">
            View Applied Loans

                </div>
        <div className="loan-container">
        {storeData.map(loan => {
           return <LoanViewer loanData={loan}></LoanViewer>
            
        })}

        </div>
    </div>)
});
export default ViewLoan;