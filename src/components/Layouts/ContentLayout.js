import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Layout } from "antd";
import { useAuthContext } from "@app/service/context/AuthContext";
import "./Layouts.scss";
const { Content } = Layout;

const ContentLayout = () => {
  const { authData } = useAuthContext();
  return (
    <div className="content-layout">
      <header className="header">
        <Header displayName={authData ? authData.name : "Not Found"} />
      </header>
      <main className="main">
        <Layout className="content">
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </main>
    </div>
  );
};

export default ContentLayout;
