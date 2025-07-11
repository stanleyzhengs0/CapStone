import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../helper/ScrollToTop";


export default function Layout() {
  return (
    <>
      <Outlet />
      <ScrollToTop />         
    </>
  );
}
