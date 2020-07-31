import React, { Component } from 'react'
import { Link,withRouter } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import ProtectedLink from './ProtectedLink/ProtectedLink'

const Navigation=React.memo((props)=>{
    // render() {
    const isLoggedIn = useSelector(state => state.loggedIn)     
   
        try{
        return (<div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                <Link className="navbar-brand" to='/'>Bank Management System</Link>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02"> */}
                <div className="" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                      
                        <ProtectedLink protect='beforeLogIn' to="/register" name="Register"></ProtectedLink>
                        <ProtectedLink protect='beforeLogIn' to="/login" name="Log in"></ProtectedLink>
                        <ProtectedLink protect='afterLogIn' to="/loan" name="Apply Loan"></ProtectedLink>
                        <ProtectedLink protect='afterLogIn' to="/edit" name="Edit Profile"></ProtectedLink>
                        <ProtectedLink protect='afterLogIn' to="/viewloan" name="View Loan"></ProtectedLink>
                        <ProtectedLink protect='afterLogIn'  to="/logout" name="Log out"></ProtectedLink>
                        
                    </ul>
                    </div>
                    {/* </div> */}
            </nav>
            </div>)
        } catch (error) {
            console.log(error)
        return (<div>SomeError has Happened,Contact Admin</div>) }
    })
// }

export default (Navigation);