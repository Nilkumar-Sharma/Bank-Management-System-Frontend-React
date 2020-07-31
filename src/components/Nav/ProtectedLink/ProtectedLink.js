import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
const ProtectedLink=React.memo(props=>{

    const isLoggedIn = useSelector(state => state.loggedIn)
    
    try {
        return (
            ((props.protect === 'afterLogIn' && isLoggedIn) || (props.protect === 'beforeLogIn' && !isLoggedIn) )  &&
            <li className="nav-item active">
                <Link className="nav-link" to={props.to}>{props.name}</Link>
            </li>
        )
}catch(error) {
    console.log(Error)
}

});
export default ProtectedLink;