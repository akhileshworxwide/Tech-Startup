import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="sub-container">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
