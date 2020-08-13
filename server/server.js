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
const dotenv = require('dotenv').config()
require('./db/mongodb.config')()
var Logger = require('bunyan');
var log = new Logger({ name: 'Server BMS' /*, ... */ });
log.info("hi %s", "paul");
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
const store = createStore(rootReducer, (applyMiddleware( logger, thunk)));
const PORT = 8000;
const app = express();
app.use(cors())
app.use(express.json())

// app.use((req, res, next) => {
//     req.logger = log
//     next();
// })
require('./controllers/loans/LoanApi').express(app)
require('./controllers/user/userApi')(app)


// x(app)
// console.log(x)
// app.use("^/$", (req, res, next) => {
//     fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
//         if (err) {
//             console.log(err);
//             return res.status(500).send("Some error happened");
//         }
//         return res.send(
//             data.replace(
//                 '<div id="root"></div>',
//                 `<div id="root">${
//                 ReactDOMServer.renderToString(
//                     // <App></App>
//                     <Provider store={store}>
//                     <React.StrictMode>
//                         <StaticRouter >
//                             <Navigation></Navigation>
//                             <Alert></Alert>
//                             <Routes></Routes>
//                             <Footer></Footer>
//                         </StaticRouter>
//                     </React.StrictMode>
//                     </Provider>
//                 )
//             }</div>`
//             )
//         );
//     });
// });

// app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
});
