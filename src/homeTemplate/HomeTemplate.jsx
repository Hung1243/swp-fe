import React from "react";

import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Nav from "../components/Header";

const HomeTemplate = () => {
  return (
    <div style={{ width: "100vw" }}>
      <Nav />
      <div className=" content" style={{ minHeight: "90vh" }}>
        <Outlet />
      </div>
      <footer className="p-3 text-center bg-black">
        <Footer />
      </footer>
    </div>
  );
};

export default HomeTemplate;
