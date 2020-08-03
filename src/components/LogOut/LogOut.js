import React, { Component } from 'react';
import {useHistory} from 'react-router-dom'
import { connect } from 'react-redux'
import {useDispatch,useSelector} from 'react-redux'
import './LogOut.scss'
function LogOut(props) {  
        // return()
    const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.loggedIn)
    const logMeOut = () => dispatch({ type: "LogMeOut" })
    let history = useHistory();
    history.push('/')

    logMeOut()
        try{
        return (<div>
            {loggedIn && <div className="container shadow justify-content-center">Logging you out
        </div>

            }
                {
                !loggedIn && 
                <div className="log-out-container shadow justify-content-center">Logged out successfully
        </div>
                }
        </div>
            )
        } catch (error) {
            console.log(error)
    }

    }
    
export default LogOut;