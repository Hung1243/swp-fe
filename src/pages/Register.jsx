import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import api from "../config/axios";

const Register = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
    try {
      api.post("/authentication/register", values);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <section className="container ">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid "
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-2">
            <Form
              name="registerForm"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign up with</p>
                <Button type="primary" className="btn-floating mx-1">
                  <i className="fab fa-facebook-f" />
                </Button>
                <Button type="primary" className="btn-floating mx-1">
                  <i className="fab fa-twitter" />
                </Button>
                <Button type="primary" className="btn-floating mx-1">
                  <i className="fab fa-google"></i>
                </Button>
              </div>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please enter your username!",
                  },
                ]}
              >
                <Input
                  type="text"
                  placeholder="Username"
                  size="large"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email!",
                    type: "email",
                  },
                ]}
              >
                <Input
                  type="email"
                  placeholder="Enter a valid email address"
                  size="large"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your password!",
                  },
                ]}
              >
                <Input
                  type="password"
                  placeholder="Enter password"
                  size="large"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                />
              </Form.Item>
              <Form.Item
                name="fullname"
                rules={[
                  {
                    required: true,
                    message: "Please enter your full name!",
                  },
                ]}
              >
                <Input
                  type="text"
                  placeholder="Full Name"
                  size="large"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone number!",
                  },
                ]}
              >
                <Input
                  type="text"
                  placeholder="Phone Number"
                  size="large"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                />
              </Form.Item>
              <div className="text-center text-lg-start mt-4 pt-2">
                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Register
                </Button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Already have an account?{" "}
                  <a href="#!" className="link-danger">
                    Login
                  </a>
                </p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
