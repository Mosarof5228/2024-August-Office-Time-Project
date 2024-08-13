import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/Home";
import Login from "../components/Login";
import Registration from "../components/Registration";
import Orders from "../components/Orders";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profilee from "../components/Profilee";
import Dashboard from "../components/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            {" "}
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profilee></Profilee>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
