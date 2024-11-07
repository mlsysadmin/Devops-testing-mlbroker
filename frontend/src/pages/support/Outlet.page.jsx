import React from "react";
import { Outlet } from "react-router-dom";
import { SupportHeaderContainer } from "../../components";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

const MainOutlet = () => {
  return (
    <>
      <Layout>
        <SupportHeaderContainer />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </>
  );
};
export default MainOutlet;
