import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './store/reducers/reducer'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Nav/Navigation'
import customHistory from './history/history'
import Alert from './components/Alert/alert';
import createSagaMiddleware from 'redux-saga'
import { watchAuth } from './store/saga/index'
import Footer from './components/Footer/Footer'
import Routes from './routes/Routes'
// import thunk from 'redux-thunk';
import thunk from 'redux-thunk';
// store.subscribe(_=>console.log(store.getState()))
// const customHistory = createBrowserHistory();
// console.log(customHistory)
const logger = store => {
  return next => {
    return action => {
      console.log("Middleware ",action)
      const result =next(action)
      console.log("MiddleWare",store.getState())
      return result
    
    }
  
}
}
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk,sagaMiddleware,logger)));
sagaMiddleware.run(watchAuth)
// store.dispatch({ type:'SHOW_ALERT_INITIATE',payload:{typ:'danger',message:'From redux saaa'}})
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter history={customHistory}>
        <Navigation></Navigation>
        <Alert></Alert>
        <Routes></Routes>

        <Footer></Footer>

      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


export { store };