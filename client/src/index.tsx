import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./App";
import store from "../src/Redux/store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

const domain: string | undefined =
  process.env.REACT_APP_AUTH0_DOMAIN || "ERRORAUTH0";
const clientID: string | undefined =
  process.env.REACT_APP_AUTH0_CLIENT_ID || "ERRORAUTH0";

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <ColorModeScript />
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
