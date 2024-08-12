import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/Home";
import Login from "../components/Login";
import Registration from "../components/Registration";

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
    ],
  },
]);
