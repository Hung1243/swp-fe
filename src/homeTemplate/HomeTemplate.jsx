import React from "react";

import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Nav from "../components/Header";

const HomeTemplate = () => {
  return (
    <div style={{ width: "100vw" }}>
      <Nav />
      <div
        className="content"
        style={{ minHeight: "90vh", backgroundColor: "" }}
      >
        <Outlet />
      </div>
      <footer className="text-center bg-black mt-5">
        <Footer />
      </footer>
    </div>
  );
};

export default HomeTemplate;
