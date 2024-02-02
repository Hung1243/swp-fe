import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const DashBoard = ({ role }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const generateMenuItem = () => {
    if (role == "TEACHER") {
      return [
        {
          key: "1",
          icon: <UserOutlined />,
          label: "Các khóa học",
        },
        {
          key: "2",
          icon: <VideoCameraOutlined />,
          label: "Chấm điểm",
        },
        {
          key: "3",
          icon: <UploadOutlined />,
          label: "Xem đánh giá",
        },
      ];
    } else {
      return [
        {
          key: "1",
          icon: <UserOutlined />,
          label: "Quản lí người dùng",
        },
        {
          key: "2",
          icon: <VideoCameraOutlined />,
          label: "Quản lí khóa học",
        },
      ];
    }
  };

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          className="demo-logo-vertical text-white bg-primary p-2"
          style={{ height: "32px", margin: "16px", "border-radius": "40px" }}
        >
          Skill Forge
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={generateMenuItem()}
        />
      </Sider>
      <Layout style={{ height: "100%", overflow: "auto" }}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            className="d-flex justify-content-start"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default DashBoard;
