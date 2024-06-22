import { Outlet } from "react-router-dom";
import React from "react";
import Layout from "../component/Layout";

const Gateway = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default Gateway;
