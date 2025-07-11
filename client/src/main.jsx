import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";           // wrapper with Header
import Home from "./pages/Home";                    // hero + grid etc.
import LoginSignup from "./pages/LoginSignup";      // new page
import CartPage from "./pages/CartPage";
import ProductDetail from "./pages/ProductDetail";

import "./index.css";

import { UserProvider } from "./context/UserContext";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/auth", element: <LoginSignup /> },
      { path: "/cart", element: <CartPage/>},
      { path: "/product", element: <ProductDetail/>}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider> 
  </React.StrictMode>
);