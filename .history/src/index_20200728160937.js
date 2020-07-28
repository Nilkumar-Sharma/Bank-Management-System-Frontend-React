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

const store = createStore(rootReducer);
// store.subscribe(_=>console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
       
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

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
        </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
              {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> */}
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </div>
</nav>

        
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
