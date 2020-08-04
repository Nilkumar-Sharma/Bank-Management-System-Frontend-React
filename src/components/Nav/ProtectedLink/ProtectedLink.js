import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
const ProtectedLink=(props=>{

    let { loggedIn } = useSelector(state => state)
    // console.log(loggedIn)
    // if (loggedIn.loggedIn) loggedIn = loggedIn.loggedIn;
    // console.log(props.protect === 'afterLogIn' && loggedIn === true)
    // console.log(((((props.protect === 'afterLogIn') && loggedIn === true) ) )?"SHow":"Hide")
    try {
        return (
            (props.protect === 'both' || ((props.protect === 'afterLogIn') && loggedIn) || (props.protect === 'beforeLogIn' && !loggedIn)) &&
            <li className="nav-item active">
                <Link className="nav-link" to={props.to}>{props.name}</Link>
            </li>
        
        )
    } catch (error) {
        console.log(Error)
        return ("ollla")

        
}

});
export default ProtectedLink;