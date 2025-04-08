import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./styles/home.css";
import Footer from "./Footer";


const Home = () => {
  return (
    <div className="main">
      <div style={{ display: "flex" }}>
        <Sidebar />

        <Outlet />
      </div>

      <Footer />
      
    </div>
  );
};

export default Home;
