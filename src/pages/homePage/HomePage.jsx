import React, { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Row, Space } from "antd";
import Meta from "antd/es/card/Meta";
import { XOutlined, MailOutlined, CalendarOutlined } from "@ant-design/icons";
import api from "../../config/axios";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const HomePage = () => {
  // const [listCategories, setListCategories] = useState([]);
  const [listCourse, setListCourse] = useState([]);
  // const getListCategories = async () => {
  //   const res = await api.get("/category");
  //   setListCategories(res.data);
  // };
  // useEffect(() => {
  //   getListCategories();
  // }, []);
  const getListCourse = async () => {
    const res = await api.get("/courseDetailAll");
    setListCourse(res.data);
  };
  useEffect(() => {
    getListCourse();
  }, []);
  return (
    <>
      <div
        id="carousel"
        style={{
          backgroundColor: "#f5d3d3",
          height: "400px",
          paddingTop: "50px",
          paddingBottom: "20px",
          paddingLeft: "150px",
        }}
      >
        <div className="container ">
          <Row gutter={24} justify="space-evenly">
            <Col span={10}>
              <div className="carousel-left">
                <h1>
                  Chinh phục mọi thách thức với khóa học kỹ năng mềm tại đây!
                </h1>
                <h5>Bắt đầu hành trình thành công của bạn ngay!</h5>
                <br />
                <br />
                <Button type="default">Bắt đầu ngay</Button>
              </div>
            </Col>
            <Col span={14}>
              {" "}
              <div className="carousel-right">
                <img
                  src="../../../../public/images/banner.png"
                  alt=""
                  style={{ width: "650px", height: "300px" }}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="category mt-5">
        <div className="container">
          <div className="category-title">
            {" "}
            <Row justify="space-between" align="middle">
              <Col span={5} className="category-left">
                <h3>Danh Mục Khóa Học</h3>
                <p>Những khóa học phổ biến</p>
              </Col>
              {/* <Col
                span={5}
                style={{ display: "flex", justifyContent: "center" }}
                className="category-right"
              >
                <Button>Tất cả khóa học</Button>
              </Col> */}
            </Row>
          </div>

          <div className="category-course">
            <Row justify="space-around ">
              {listCourse.slice(0, 5).map((items) => {
                return (
                  <Col span={2}>
                    <Card
                      className="pt-4"
                      hoverable
                      style={{
                        width: 150,
                        height: 150,
                      }}
                      cover={<XOutlined style={{ padding: "10px" }} />}
                    >
                      <h5 className="fs-6 text-center">{items.name}</h5>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
      <div id="explore" className="mt-5">
        <div className="container">
          <div className="explore-tile">
            <Row justify="space-between" align="middle">
              <Col span={5} className="category-left">
                <h3>Các khóa học nổi bật</h3>
                <p>Những khóa học nhiều người quan tâm</p>
              </Col>
              <Col
                span={5}
                style={{ display: "flex", justifyContent: "center" }}
                className="category-right"
              >
                <Button>
                  <Link className="text-decoration-none" to="/course">
                    Tất cả khóa học
                  </Link>
                </Button>
              </Col>
            </Row>
          </div>
          <div className="card-course">
            <Row gutter={24}>
              {" "}
              {listCourse.slice(0, 8).map((items) => {
                return (
                  <Col span={6}>
                    <Card
                      hoverable
                      style={{
                        width: 300,
                        marginBottom: "10px",
                      }}
                      cover={
                        <img
                          alt={items.name}
                          src={items.pictureLink}
                          style={{ width: "300px", height: "200px" }}
                        />
                      }
                      className="py-0"
                    >
                      <p>
                        by <strong>{items.createBy.username}</strong>{" "}
                      </p>
                      <h5 className="fw-bold fs-3">{items.name}</h5>
                      <Space>
                        <p>2 Weeks</p>
                        <p>1000 students</p>
                      </Space>
                      <hr />
                      <Row justify={"space-between"}>
                        <Col>
                          <p className="fs-5 fw-medium">
                            {items.price.toLocaleString()}đ
                          </p>
                        </Col>
                        <Col>
                          <Link
                            className="text-decoration-none text-dark fs-6 fw-bold"
                            to={`/course/${items.id}`}
                          >
                            View more
                          </Link>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>

      <div className="card-number container mt-5">
        <Row gutter={24} justify="space-around" align="middle">
          <Col span={4} style={{ display: "felx", justifyContent: "center" }}>
            <Card
              className="pt-1"
              hoverable
              style={{
                width: 200,
                height: 120,
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <h3>
                {" "}
                <CountUp end={900} duration={1} />
              </h3>
              <h6>Active Students</h6>
            </Card>
          </Col>
          <Col span={4}>
            <Card
              className="pt-1"
              hoverable
              style={{
                width: 200,
                height: 120,
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <h3>
                {" "}
                <CountUp end={100} duration={1} delay={1} />
              </h3>
              <h6>Total Courses</h6>
            </Card>
          </Col>
          <Col span={4}>
            <Card
              className="pt-1"
              hoverable
              style={{
                width: 200,
                height: 120,
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <h3>
                {" "}
                <CountUp end={90} duration={1} />
              </h3>
              <h6>Instructor</h6>
            </Card>
          </Col>
          <Col span={4}>
            <Card
              className="pt-1"
              hoverable
              style={{
                width: 200,
                height: 120,
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <h3>
                {" "}
                <CountUp end={1000} duration={1} />
              </h3>
              <h6>Statisfaction Rate</h6>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="feedback mt-5">
        <h3>Phản hồi</h3>
        <p>Những học viên của Skill Forge đã nói gì</p>
      </div>
      <div className="card-feedback">
        <Card
          hoverable
          style={{
            width: 240,
            paddingTop: 10,
          }}
          cover={<MailOutlined style={{ padding: "10px" }} />}
        >
          <p>
            Có những điều tôi học được từ khóa học này rất bổ ích cho tôi, tôi
            phải cảm ơn những người tạo ra khóa học này vì đã giúp tôi cải thiện
            bản thân mình.
          </p>
          <h5>John Doe</h5>
          <p>Designer</p>
        </Card>
        <Card
          hoverable
          style={{
            width: 240,
            paddingTop: 10,
          }}
          cover={<MailOutlined style={{ padding: "10px" }} />}
        >
          <p>
            Có những điều tôi học được từ khóa học này rất bổ ích cho tôi, tôi
            phải cảm ơn những người tạo ra khóa học này vì đã giúp tôi cải thiện
            bản thân mình.
          </p>
          <h5>John Doe</h5>
          <p>Designer</p>
        </Card>
        <Card
          hoverable
          style={{
            width: 240,
            paddingTop: 10,
          }}
          cover={<MailOutlined style={{ padding: "10px" }} />}
        >
          <p>
            Có những điều tôi học được từ khóa học này rất bổ ích cho tôi, tôi
            phải cảm ơn những người tạo ra khóa học này vì đã giúp tôi cải thiện
            bản thân mình.
          </p>
          <h5>John Doe</h5>
          <p>Designer</p>
        </Card>
        <Card
          hoverable
          style={{
            width: 240,
            paddingTop: 10,
          }}
          cover={<MailOutlined style={{ padding: "10px" }} />}
        >
          <p>
            Có những điều tôi học được từ khóa học này rất bổ ích cho tôi, tôi
            phải cảm ơn những người tạo ra khóa học này vì đã giúp tôi cải thiện
            bản thân mình.
          </p>
          <h5>John Doe</h5>
          <p>Designer</p>
        </Card>
      </div>
    </>
  );
};

export default HomePage;
