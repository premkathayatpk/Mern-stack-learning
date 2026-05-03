import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/comon/Navbar";
import Footer from "../components/comon/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="h-[90vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
