import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from "@ant-design/icons";
const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={(item) => {
            navigate(item.key);
          }}
          items={[
            {
              key: "/admin",
              icon: <VideoCameraOutlined />,
              label: "Dashboard",
            },
            {
              key: "/admin/products",
              icon: <UserOutlined />,
              label: "Products",
              children: [
                {
                  key: "/admin/products",
                  icon: <VideoCameraOutlined />,
                  label: "Product List",
                },
                {
                  key: "/admin/products/add",
                  icon: <VideoCameraOutlined />,
                  label: "Add Product",
                },
                {
                  key: "/admin/products/:id/update",
                  icon: <UploadOutlined />,
                  label: "Update Product",
                },
              ],
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout