import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import App from "./Components/App";
import logger from "redux-logger";
import contacts from "./Redux/SideBar/contacts";
import messages from "./Redux/ChatWindow/messages";
import animation from "./Redux/Animation/animation";

const reducer = combineReducers({ contacts, messages, animation });

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
