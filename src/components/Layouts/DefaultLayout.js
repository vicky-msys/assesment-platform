import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Icon from "@ant-design/icons";
import { Divider, Layout, Menu } from "antd";
import { useAuthContext } from "@app/service/context/AuthContext";
import "./Layouts.scss";
const { Content, Sider } = Layout;

const DefaultLayout = ({ children }) => {
  console.log("children  ",children);
  const { authData } = useAuthContext();
  let [collapsed, setCollapsed] = useState(false);
  let location = useLocation();
  //let selectedMenu = location.pathname;
  let selectedMenu = "/"+location.pathname.split("/")[1];
  function onCollapse(collapsed) {
    setCollapsed(collapsed);
  }
  return (
    <div className="default-layout">
      <header className="header">
        <Header displayName={authData ? authData.name : "Not Found"} />
      </header>
      <main className="main">
        <Layout style={{ minHeight: "88vh" }}>
          <Sider
            // theme="light"
            // collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
            className="default-layout-sider"
          >
            <Menu
              theme="light"
              selectedKeys={selectedMenu}
              mode="inline"
            >
              {children.map((item,index) => {
                return (
                  item.isMenu !== false && (
                    <>
                    <Menu.Item key={item.routeName || index} style={{pointerEvents:((item.routeName === "")?"none":"auto")}}>
                      <Icon component={item.icon} />
                      <span>{item.title}</span>
                      <Link to={item.routeName} />
                    </Menu.Item>
                    {item.routeName === "" && <Divider/>}
                    </>
                  )
                );
              })}
            </Menu>
          </Sider>
          <Layout className="content">
            <Content style={{ margin: "10px 12px" }}>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </main>
    </div>
  );
};

export default DefaultLayout;
