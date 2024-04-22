import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import DeliveriesPage from "./pages/DeliveriesPage";
import App from "./components/App";
import NewDeliveryPage from "./pages/NewDeliveryPage";
import UiContextProvider from "./context/UiContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/deliveries" />,
      },
      {
        path: "deliveries",
        element: <DeliveriesPage />,
      },
      {
        path: "new",
        element: <NewDeliveryPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UiContextProvider>
      <RouterProvider router={router} />
    </UiContextProvider>
  </React.StrictMode>
);
