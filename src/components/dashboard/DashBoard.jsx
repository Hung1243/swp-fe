import React, { useState } from "react";
import {
  CheckOutlined,
  DatabaseOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Dropdown, Space, Avatar } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const { Header, Sider, Content } = Layout;
import { DownOutlined } from "@ant-design/icons";
import { logout } from "../../reudux/feature/accountSlice";
const DashBoard = ({ role }) => {
  const account = useSelector((store) => store.account);
  console.log(account);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const generateMenuItem = () => {
    if (role == "TEACHER") {
      return [
        {
          key: "1",
          icon: <DatabaseOutlined />,
          label: (
            <Link to="courses" className="text-decoration-none">
              Các khóa học
            </Link>
          ),
        },
        {
          key: "2",
          icon: <VideoCameraOutlined />,
          label: (
            <Link to="grade" className="text-decoration-none">
              Chấm điểm
            </Link>
          ),
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

          label: (
            <Link to="manage-user" className="text-decoration-none">
              Quản lí người dùng
            </Link>
          ),
        },
        {
          key: "2",
          icon: <VideoCameraOutlined />,
          label: (
            <Link to="manage-course" className="text-decoration-none">
              Quản lí khóa học
            </Link>
          ),
        },
      ];
    }
  };
  const items = [
    {
      label: <Link to="/profile">My Profile</Link>,
      key: "0",
    },
    {
      label: (
        <Button
          onClick={() => {
            dispatch(logout());
            localStorage.clear();
            navigate("/login");
          }}
        >
          Logout
        </Button>
      ),
      key: "1",
    },
  ];
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
          className="d-flex justify-content-between pe-3"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            className="d-flex justify-content-center align-items-center"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Avatar src={account.avatar} />
                {account.fullName}
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
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
