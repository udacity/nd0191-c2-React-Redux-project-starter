import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { legacy_createStore as createStore } from "redux";
import App from './App';
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";
import middleware from "./middleware";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(rootReducer, middleware);


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
