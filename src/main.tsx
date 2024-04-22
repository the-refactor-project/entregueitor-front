import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import UiContextProvider from "./context/ui/UiContextProvider";
import { mainRouter } from "./routers/mainRouter";
import "./index.css";
import AuthContextProvider from "./context/auth/AuthContextProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <UiContextProvider>
        <RouterProvider router={mainRouter} />
      </UiContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
