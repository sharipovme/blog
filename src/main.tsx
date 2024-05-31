import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/app.css";
import "./styles/main.scss";
import { AppProvider } from "./providers/app";
import RouteProvider from "./providers/route-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <RouteProvider />
  </AppProvider>
);
