import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { DownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Dropdown, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/feature/accountSlice";
const Nav = () => {
  const account = useSelector((store) => store.account);
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = [
    {
      label: (
        <Link to="/profile" style={{ textDecoration: "none" }}>
          My Profile
        </Link>
      ),
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
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container d-flex justify-content-between">
          <Link className="navbar-brand fs-3 fw-bold" to="/">
            Skill Forge
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/course">
                  Các khóa học
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/enrolled">
                  Khóa học của tôi
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <div className="cart-items px-3">
              {" "}
              <Link className="nav-link" to="/cart">
                <Badge count={cart.cartItems.length}>
                  <ShoppingCartOutlined
                    style={{ fontSize: "25px", color: "#000" }}
                  />
                </Badge>
              </Link>
            </div>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space style={{ color: "#b75757" }}>
                  <Avatar src={account.avatar} />
                  Hi{account.fullName}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
