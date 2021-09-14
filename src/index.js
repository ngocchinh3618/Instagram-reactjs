import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import userReducer from "./reducers/users";
import dataCardMain from "./reducers/getdata";
import dataMoment from "./reducers/getmoment";

const rootReducer = combineReducers({
  usr: userReducer,
  dataCard: dataCardMain,
  dataMoment: dataMoment
  
});

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
