import App from "@/components/App";
import DeliveriesPage from "@/pages/DeliveriesPage";
import LoginPage from "@/pages/LoginPage/LoginPage";
import NewDeliveryPage from "@/pages/NewDeliveryPage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProtectedPage from "@/pages/ProtectedPage";
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
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "deliveries",
        element: (
          <ProtectedPage>
            <DeliveriesPage />
          </ProtectedPage>
        ),
      },
      {
        path: "new",
        element: (
          <ProtectedPage>
            <NewDeliveryPage />
          </ProtectedPage>
        ),
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
