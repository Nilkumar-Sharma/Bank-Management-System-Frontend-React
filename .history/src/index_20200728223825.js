import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducer'
import { BrowserRouter, Switch,Route,Link } from 'react-router-dom';
import Register from './components/Register/Register'
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from './components/LogIn/LogIn';
import Loan from './components/Loan/Loan'
import UpdateProfile from './components/Profile/UpdateProfile';
import LogOut from './components/LogOut/LogOut';

const store = createStore(rootReducer);
// store.subscribe(_=>console.log(store.getState()))
const customHistory = createBrowserHistory();
console.log(customHistory)
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter forceRefresh={true} history={customHistory}>
        <Navigation></Navigation>
       
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <a className="navbar-brand" href="#">
            <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""></img>
              Bank Management System
  </a>

          <ul className="navbar-nav  mr-auto">
          <li className="nav-item mr-2">
            <Link to="/">App</Link>
            </li>
            <li className="nav-item mr-2">
            <Link to="/register">Register</Link>
          </li>
            <li className="nav-item mr-2">
            <Link to="/login">LogIn</Link>
            </li>
            <li className="nav-item mr-2">
              <Link to="/loan">Apply Loan</Link>
            </li>
            <li className="nav-item mr-2">
              <Link to="/edit">Edit Profile</Link>
            </li>
          </ul>
        </nav> */}
       
        
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
            <LogIn/>
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
      </Switch>
      </BrowserRouter>
    </React.StrictMode>
  
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default customHistory;