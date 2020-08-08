import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../src/App/App";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../src/store/reducers/reducer'
import { StaticRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../src/components/Nav/Navigation'
// import customHistory from '../src/history/history'
import Alert from '../src/components/Alert/alert';
import createSagaMiddleware from 'redux-saga'
// import { watchAuth } from '../src/store/saga/index'
import Footer from '../src/components/Footer/Footer'
import Routes from '../src/routes/Routes'

import thunk from 'redux-thunk';
import cors from 'cors';
// store.subscribe(_=>console.log(store.getState()))
// const customHistory = createBrowserHistory();
const logger = store => {
    return next => {
        return action => {
            console.log("Middleware ", action)
            const result = next(action)
            console.log("MiddleWare", store.getState())
            return result

        }

    }
}
const sagaMiddleware = createSagaMiddleware()
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, (applyMiddleware( logger, thunk)));
// sagaMiddleware.run(watchAuth)
// store.dispatch({ type:'SHOW_ALERT_INITIATE',payload:{typ:'danger',message:'From redux saaa'}})
// ReactDOM.render(
   



const PORT = 8000;

const app = express();
app.use(cors())
const x = require('./loans/LoanApi').express(app)

// x(app)
// console.log(x)
app.use("^/$", (req, res, next) => {
    fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Some error happened");
        }
        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${
                ReactDOMServer.renderToString(
                    // <App></App>
                    <Provider store={store}>
                    <React.StrictMode>
                        <StaticRouter >
                            <Navigation></Navigation>
                            <Alert></Alert>
                            <Routes></Routes>
                            <Footer></Footer>
                        </StaticRouter>
                    </React.StrictMode>
                    </Provider>
                )
            }</div>`
            )
        );
    });
});

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
});
