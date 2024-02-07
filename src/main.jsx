import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Components/Shop/Shop.jsx";
import Home from "./Components/Layout/Home.jsx";
import Orders from "./Components/Orders/Orders.jsx";
import Inventory from "./Components/Inventory/Inventory.jsx";
import Login from "./Components/Login.jsx/Login.jsx";
import cartProductsLoader from "./Loaders/cartProductsLoader.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path:'/orders',
        element:<Orders/>,
        loader:cartProductsLoader,
      },
      {
        path:'/inventory',
        element:<Inventory/>
      },
      {
        path:'/login',
        element:<Login/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
