import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./sass/_global.scss";
import { Provider } from "react-redux";
import { store } from "./store/reducers/index";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
