import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import App from "./App.jsx";
import Mystate from "./components/Mystate.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "propers",
    element: <App />,
  },
  {
    path: "states",
    element: <Mystate />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
