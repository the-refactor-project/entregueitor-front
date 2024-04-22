import App from "@/components/App";
import DeliveriesPage from "@/pages/DeliveriesPage";
import NewDeliveryPage from "@/pages/NewDeliveryPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { Navigate, createBrowserRouter } from "react-router-dom";

export const mainRouter = createBrowserRouter([
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
