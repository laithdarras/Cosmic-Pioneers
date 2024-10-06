import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Home from "./pages/home";
import Music from "./pages/Music";
import Journal from "./pages/Journal";
import Begin from "./pages/Begin";
import Game from "./pages/Game";

//define accessible routes and which componenets respond to which URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        path: "/home",
        element: <Home />,
      },
      {
        path: "/music",
        element: <Music />,
      },
      {
        path: "/game",
        element: <Game />,
      },

      {
        path: "/journal",
        element: <Journal />,
      },
      {
        path: "/begin",
        element: <Begin />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
