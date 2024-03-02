import React from "react";
import { Button, Card, Carousel, Col, Row, Space } from "antd";
import Meta from "antd/es/card/Meta";
import { XOutlined, MailOutlined } from "@ant-design/icons";

const HomePage = () => {
  return (
    <>
      <div id="carousel">
        <div className="container d-flex justify-content-around">
          <div className="carousel-left d-flex align-items-center">
            <div  iv className="carousel-wrap">
              <h1>Collect the course now</h1>
              <h5>It is the man</h5>
              <Button type="primary">Get Started</Button>
            </div>
          </div>
          <div className="carousel-right">
            <img src="https://i.pravatar.cc/300" alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="category">
          <div className="category-container d-flex justify-content-around">
            <div className="category-left">
              <div className="category-wrap ">
                <h3>Danh Mục Khóa Học</h3>
                <p>Những khóa học phổ biến</p>
              </div>
            </div>
            <div className="category-right">
              <Button type="primary">Tất cả khóa học</Button>
            </div>
          </div>
        </div>
        <div className="category-course">
              <Card
                className="pt-4"
                hoverable
                style={{
                  width: 150,
                  height: 150,
                }}
                cover={<XOutlined style={{ padding: "10px" }} />}
              >
                <h5>Hội họa</h5>
              </Card>
              <Card
                className="pt-4"
                hoverable
                style={{
                  width: 150,
                  height: 150,
                }}
                cover={<XOutlined style={{ padding: "10px" }} />}
              >
                <h5>Thiết Kế</h5>
              </Card>
              <Card
                className="pt-4"
                hoverable
                style={{
                  width: 150,
                  height: 150,
                }}
                cover={<XOutlined style={{ padding: "10px" }} />}
              >
                <h5>Kĩ năng mềm</h5>
              </Card>
              <Card
                className="pt-4"
                hoverable
                style={{
                  width: 150,
                  height: 150,
                }}
                cover={<XOutlined style={{ padding: "10px" }} />}
              >
                <h5>Đời sống</h5>
              </Card>
              <Card
                className="pt-4"
                hoverable
                style={{
                  width: 150,
                  height: 150,
                }}
                cover={<XOutlined style={{ padding: "10px" }} />}
              >
                <h5>Mẹo vặt</h5>
              </Card>
          </div>
      </div>
      <div className="explore d-flex justify-content-around">
        <div className="explore-wrap ">
          <h3>Các khóa học nổi bật</h3>
          <p>Những khóa học nhiều người quan tâm</p>
        </div>
        <Button type="primary">Tất cả khóa học</Button>
      </div>
      <div className="card-course-1">
        <Card
          hoverable
          style={{
            width: 300,
          }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>

        <Card
          hoverable
          style={{
            width: 300,
          }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{
            width: 300,
          }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
      <div className="card-course-2">
        <Card
          hoverable
          style={{
            width: 300,
          }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{
            width: 300,
          }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{
            width: 300,
          }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>

      <div className="card-note">
        <Card
          className="pt-4"
          hoverable
          style={{
            width: 180,
            height: 180,
          }}
          cover={<XOutlined style={{ padding: "10px" }} />}
        >
          <h6>Active Students</h6>
        </Card>
        <Card
          className="pt-4"
          hoverable
          style={{
            width: 180,
            height: 180,
          }}
          cover={<XOutlined style={{ padding: "10px" }} />}
        >
          <h6>Total Courses</h6>
        </Card>
        <Card
          className="pt-4"
          hoverable
          style={{
            width: 180,
            height: 180,
          }}
          cover={<XOutlined style={{ padding: "10px" }} />}
        >
          <h6>Instructor</h6>
        </Card>
        <Card
          className="pt-4"
          hoverable
          style={{
            width: 180,
            height: 180,
          }}
          cover={<XOutlined style={{ padding: "10px" }} />}
        >
          <h6>Statisfaction Rate</h6>
        </Card>
      </div>

      <div className="feedback">
        <h3>Phản hồi</h3>
        <p>Những học viên của Skill Forge đã nói gì</p>
      </div>

      <div className="card-feedback">
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<MailOutlined style={{ padding: "10px" }} />}
        >
          <p>Có những điều tôi học được từ khóa học này rất bổ ích cho tôi, tôi phải cảm ơn những người tạo ra khóa học này vì đã giúp tôi cải thiện bản thân mình.</p>
          <h5>John Doe</h5>
          <p>Designer</p>
        </Card>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<MailOutlined style={{ padding: "10px" }} />}
        >
          <p>Có những điều tôi học được từ khóa học này rất bổ ích cho tôi, tôi phải cảm ơn những người tạo ra khóa học này vì đã giúp tôi cải thiện bản thân mình.</p>
          <h5>John Doe</h5>
          <p>Designer</p>
        </Card>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<MailOutlined style={{ padding: "10px" }} />}
        >
          <p>Có những điều tôi học được từ khóa học này rất bổ ích cho tôi, tôi phải cảm ơn những người tạo ra khóa học này vì đã giúp tôi cải thiện bản thân mình.</p>
          <h5>John Doe</h5>
          <p>Designer</p>
        </Card>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<MailOutlined style={{ padding: "10px" }} />}
        >
          <p>Có những điều tôi học được từ khóa học này rất bổ ích cho tôi, tôi phải cảm ơn những người tạo ra khóa học này vì đã giúp tôi cải thiện bản thân mình.</p>
          <h5>John Doe</h5>
          <p>Designer</p>
        </Card>
      </div>
    </>
  );
};

export default HomePage;
