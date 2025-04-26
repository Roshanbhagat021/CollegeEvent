import { Children } from "react";
import App from "../App";
import Events from "../pages/Events";
import Clubs from "../pages/Clubs";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import CreateEvent from "../pages/CreateEvent";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/events", element: <Events /> },
      { path: "/clubs", element: <Clubs /> },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/create-events",
        element: <CreateEvent />,
      },
    ],
  },
];

export default routes;
