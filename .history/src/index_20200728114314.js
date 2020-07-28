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

const store = createStore(rootReducer);
store.subscribe(_=>console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <nav className="nav">
          <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/">App</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          </ul>
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
