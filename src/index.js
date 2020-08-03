
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "../src/registerServiceWorker";
// import { Auth0Provider } from "./react-auth0-spa";
// import config from "./auth-config.json";
// import history from "./utils/history";




ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();