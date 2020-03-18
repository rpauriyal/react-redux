import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware ,compose} from "redux";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import reducer from "./reducer/reducer";
import createSagaMiddleware from "redux-saga";
import { watchAddDetails } from "./sagas/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,compose(applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
sagaMiddleware.run(watchAddDetails);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
