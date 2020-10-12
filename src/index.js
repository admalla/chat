import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import App from "./components/App";
import logger from "redux-logger";
import contacts from "./redux/contacts/contacts";
import messages from "./redux/messages/messages";
import application from "./redux/application/application";
import profileContact from "./redux/profile/profile";

const reducer = combineReducers({
  contacts,
  messages,
  application,
  profileContact,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <div className="body">
      <App />
    </div>
  </Provider>,
  document.getElementById("root")
);
