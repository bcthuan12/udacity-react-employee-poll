import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import users from "./reducers/users";
import questions from "./reducers/questions";
import authorizedUser from "./reducers/authorizedUser";
import "bootstrap/dist/css/bootstrap.min.css";

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("The action: ", action);
  const returnValue = next(action);
  console.log("The new state: ", store.getState());
  console.groupEnd();
  return returnValue;
};

export const store = configureStore({
  reducer: { users, questions, authorizedUser },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

const container =
  document.getElementById("root") || document.createElement("div");
console.log(container);
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
