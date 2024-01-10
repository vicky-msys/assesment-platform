import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ErrorBoundary from "@app/components/ErrorBoundary/ErrorBoundary";
import "./index.css";
import { AuthContextProvider } from "@app/service/context/AuthContext";
import { Provider } from "react-redux";
import { store } from "./features/store";

// const root = ReactDOM.createRoot(document.getElementById("app"));
// root.render(
//   <ErrorBoundary>
//     <App />
//   </ErrorBoundary>
// );

ReactDOM.render(
  <ErrorBoundary>
    <AuthContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthContextProvider>
  </ErrorBoundary>,
  document.getElementById("app")
);
