import React from "react";
import { Button, Card, Col, Flex, Row, Slider, Space, Typography } from "antd";
import {
  ClockCircleOutlined,
  CopyFilled,
  SignalFilled,
  TeamOutlined,
} from "@ant-design/icons";
const cardStyle = {
  width: "100%",
};
const imgStyle = {
  display: "block",
  width: 273,
};
const MyProfile = () => {
  return (
    <>
      <section className="information mt-3">
        <div className="container">
          <h2>Trang cá nhân</h2>
          <Card
            hoverable
            style={cardStyle}
            styles={{
              body: {
                padding: 0,
                overflow: "hidden",
              },
            }}
          >
            <Row gutter={24} justify="flex-start">
              <Col span={6}>
                <img
                  alt="avatar"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  style={imgStyle}
                />
              </Col>

              <Col
                span={18}
                style={{
                  padding: 32,
                }}
              >
                <Row gutter={24} justify={"space-around"}>
                  <Col span={12}>
                    <p>Tên: </p>
                    <p>Email: </p>
                    <p>Số điện thoại: </p>
                  </Col>
                  <Col span={12}>
                    <p>Vai trò</p>
                    <p>Tên tài khoản</p>
                    {/* <p>Mật khẩu:</p> */}
                  </Col>
                </Row>
                <Button type="primary" target="_blank">
                  Update
                </Button>
              </Col>
            </Row>
          </Card>
        </div>
      </section>
      <section className="my-enroll mt-3">
        <div className="container">
          <h3>Các khóa học đã tham gia</h3>
          <div className="member border mt-3 w-75 ">
            <div className="row">
              {" "}
              <div className="pic col-4">
                <img
                  style={{ width: "300px", height: "200px" }}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  className="img-fluid"
                  alt="..."
                />
              </div>
              <div className="member-info col-8 pt-1 ">
                <p>
                  by <strong></strong>
                </p>
                <h3 className="mb-4">TeacherS</h3>

                <Space>
                  <ClockCircleOutlined style={{ color: "#B75757" }} />
                  2 weeks
                  <TeamOutlined style={{ color: "#B75757" }} />
                  10000 students
                  <SignalFilled style={{ color: "#B75757" }} />
                  All levels
                  <CopyFilled style={{ color: "#B75757" }} />
                  20 lessons
                </Space>
                <hr className="m-2" />
                <div className="footer d-flex justify-content-between align-items-center">
                  {/* <p className="fs-4 fw-bold text-dark">
                          {item.course.price}$
                        </p> */}
                  <Slider defaultValue={30} />
                  {/* <Link
                    className="text-decoration-none text-dark"
                    to={`/enrolled/${item.course.id}`}
                  >
                    Learn Now <CaretRightOutlined />
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyProfile;
