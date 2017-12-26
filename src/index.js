import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import LogRocket from 'logrocket';
import ScrollToTop from "./ScrollToTop";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./stylesheets/main.css";
import './stylesheets/assets/webfonts/fontawesome-all.css';

LogRocket.init('tsfljv/my-app');

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();