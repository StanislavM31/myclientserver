import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, Provider } from "react-redux";

const defaultState = {
  filled: "all",
};

action = { type: "", payload: { name, surname, password } };
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "filled":
      return { ...state, filled: state.filled + action.payload };
      break;
    case "filled":
      return { ...state, filled: state.filled + action.payload };
      break;

    default:
      return state;
  }
};
const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
