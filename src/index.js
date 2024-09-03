// Importing all dependencies React library, ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";
// Importing global CSS file for styling
import "./index.css";
import "./bootstrap.min.css";
import App from "./App";
// Importing the Redux store
import store from "./store";
// Importing Provider component from react-redux to connect the store with the React app
import { Provider } from "react-redux";
// Importing BrowserRouter for routing
import { BrowserRouter } from "react-router-dom";


// Creating a root element to render the React application
const root = ReactDOM.createRoot(document.getElementById("root"));
// Rendering the application inside the root element
root.render(
  <React.StrictMode>
    {/* Enabling strict mode for highlighting potential problems */}
    <BrowserRouter>
      {/* Wrapping the app with BrowserRouter to enable routing */}
      <Provider store={store}>
        {/* Providing the Redux store to the entire app */}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
