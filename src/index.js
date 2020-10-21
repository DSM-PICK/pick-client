import React from "react";
import ReactDOM from "react-dom";
import Favicon from "react-favicon";
import { Provider } from "react-redux";
import App from "./App";
import store from "./module/store";
import { PICK_FAVICON } from "./asset/index";

ReactDOM.render(
  <Provider store={store}>
    {/* <Favicon url="./asset/favicon/favicon.ico" /> */}
    <App />
  </Provider>,
  document.getElementById("root")
);
