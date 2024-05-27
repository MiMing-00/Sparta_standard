import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { textContextProvider } from "./context/textContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <textContextProvider>
      <App />
    </textContextProvider>
  </React.StrictMode>
);
