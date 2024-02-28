import {
  CaretRightOutlined,
  ClockCircleOutlined,
  CopyFilled,
  HomeOutlined,
  SignalFilled,
  TeamOutlined,
  UserDeleteOutlined,
  UserOutlined,
} from "@ant-design/icons";

import {
  Card,
  Flex,
  Pagination,
  Space,
  Typography,
  Button,
  Row,
  Col,
} from "antd";
import Search from "antd/es/input/Search";
import React from "react";
import { Link } from "react-router-dom";

const onSearch = (value, _e, info) => console.log(info?.source, value);
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const data = [
  {
    id: "1",
    name: "khoa hoc1",
    price: 10000,
    fullName: "Giao su 1",
    pictureLink: "https://i.pravatar.cc/300",
  },
  {
    id: "2",
    name: "khoa hoc1",
    price: 10000,
    fullName: "Giao su",
    pictureLink: "https://i.pravatar.cc/300",
  },
  {
    id: "3",
    name: "khoa hoc1",
    price: 10000,
    fullName: "Giao su",
    pictureLink: "https://i.pravatar.cc/300",
  },
  {
    id: "4",
    name: "khoa hoc1",
    price: 10000,
    fullName: "Giao su",
    pictureLink: "https://i.pravatar.cc/300",
  },
  {
    id: "4",
    name: "khoa hoc1",
    price: 10000,
    fullName: "Giao su",
    pictureLink: "https://i.pravatar.cc/300",
  },
  {
    id: "4",
    name: "khoa hoc1",
    price: 10000,
    fullName: "Giao su",
    pictureLink: "https://i.pravatar.cc/300",
  },
  {
    id: "4",
    name: "khoa hoc1",
    price: 10000,
    fullName: "Giao su",
    pictureLink: "https://i.pravatar.cc/300",
  },
];
const MyCourse = () => {
  return (
    <div className="container">
      {" "}
      <div className="myCourse  ">
        <div className="d-flex justify-content-between">
          <h3>KHÓA HỌC CỦA TÔI </h3>
          <Space direction="vertical">
            <Search
              placeholder="Search"
              onSearch={onSearch}
              style={{
                width: 200,
              }}
            />
          </Space>
        </div>
        {data.map((item) => {
          return (
            <div className="member border mt-3  ">
              <Card
                hoverable
                styles={{
                  body: {
                    padding: 0,
                    overflow: "hidden",
                  },
                }}
              >
                <Row>
                  <Col span={7}>
                    <img alt={item.name} src={item.pictureLink} />
                  </Col>
                  <Col span={17}>
                    <div className="member-info">
                      <p>
                        by <strong>{item.fullName}</strong>
                      </p>
                      <h3 className="mb-4">{item.name}</h3>

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
                      <br />
                      <br />

                      <hr />

                      <div className="footer d-flex justify-content-between align-items-center">
                        <p className="fs-4 text-dark">{item.price}$</p>
                        <Link
                          className="text-decoration-none text-dark"
                          to={item.id}
                        >
                          Di Den Khoa Hoc <CaretRightOutlined />
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>
            </div>
          );
        })}

        <div className="mt-5 justify-content-end">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  );
};

export default MyCourse;
