import React, { Component } from 'react'
import LogIn from '.././components/LogIn/LogIn';
import Loan from '.././components/Loan/Loan'
import UpdateProfile from '.././components/Profile/UpdateProfile';
import App from '../App/App';
import LogOut from '.././components/LogOut/LogOut';
import Register from '.././components/Register/Register'
import { Switch, Route} from 'react-router-dom';
import ViewLoan from '../components/Loan/ViewLoans/ViewLoans'
class Routes extends Component {

    render() {
        try {
            return (<div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/">
                        <App />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route path="/login">
                        <LogIn />
                    </Route>
                    <Route path="/loan">
                        <Loan></Loan>
                    </Route>
                    <Route path="/edit">
                        <UpdateProfile></UpdateProfile>
                    </Route>
                    <Route path="/logout">
                        <LogOut></LogOut>
                    </Route>
                    <Route path="/viewloan">
                        <ViewLoan></ViewLoan>
                    </Route>
                </Switch>
            </div>)

        } catch (error) {
            return <div>
                Error
            </div>

        }
    }
}
export default Routes