import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducer'
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import SignUp from './components/SingUp/SingUp'
import { createBrowserHistory } from 'history';

const store = createStore(rootReducer);
store.subscribe(_=>console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router history={createBrowserHistory}>
        <Route path="/" component={App}>
          <Route component={SignUp} />
          {/* <Route path="home" component={SignUp} /> */}
          {/* <Route path="about" component={About} /> */}
          {/* <Route path="contact" component={Contact} /> */}
        </Route>
      </Router>
   
    </React.StrictMode>
  
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
