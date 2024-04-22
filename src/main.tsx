import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import UiContextProvider from "./context/UiContextProvider";
import { mainRouter } from "./routers/mainRouter";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UiContextProvider>
      <RouterProvider router={mainRouter} />
    </UiContextProvider>
  </React.StrictMode>
);
