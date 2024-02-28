import React, { useState } from "react";
import { ClockCircleOutlined } from "@ant-design/icons";
import {
  AudioOutlined,
  UserDeleteOutlined,
  SignalFilled,
  CopyFilled,
  ArrowRightOutlined,
  CaretRightOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Table } from "antd";
import { Input, Space } from "antd";
import { Link } from "react-router-dom";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const data = [
  {
    id: "1",
    name: "khoa hoc1",
    price: 10000,
    fullName: "tao ne",
    pictureLink: "https://i.pravatar.cc/300",
  },
  {
    id: "2",
    name: "khoa hoc1",
    price: 10000,
    fullName: "tao ne",
    pictureLink: "https://i.pravatar.cc/300",
  },
  {
    id: "3",
    name: "khoa hoc1",
    price: 10000,
    fullName: "tao ne",
    pictureLink: "https://i.pravatar.cc/300",
  },
  {
    id: "4",
    name: "khoa hoc1",
    price: 10000,
    fullName: "tao ne",
    pictureLink: "https://i.pravatar.cc/300",
  },
];
const ViewCourses = () => {
  return (
    <div className="container">
      <div className="row">
        {" "}
        <div className="viewCourse col-9 ">
          <div className="d-flex justify-content-between">
            <h3>All Course</h3>
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
                <div className="row">
                  {" "}
                  <div className="pic col-4">
                    <img src={item.pictureLink} className="img-fluid" alt />
                  </div>
                  <div className="member-info col-8 pt-5 ">
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
                        View more <CaretRightOutlined />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="sort col-3">
          <h3>Danh muc khoa hoc </h3>
          <Checkbox onChange={onChange}>Loai 1</Checkbox>
          <br />
          <Checkbox onChange={onChange}>Loai 1</Checkbox>
          <br />
          <Checkbox onChange={onChange}>Loai 3</Checkbox>
          <br />
          <Checkbox onChange={onChange}>Loai 4</Checkbox>
          <br />
          <Checkbox onChange={onChange}>Loai 5</Checkbox>
          <br />
          <Checkbox onChange={onChange}>Loai 6</Checkbox>
          <br />
          <Checkbox onChange={onChange}>Loai 7</Checkbox>
          <br />
          <Checkbox onChange={onChange}>Loai 8</Checkbox>
          <br />
          <h3>Giang vien</h3>
          <Checkbox onChange={onChange}>Giang vien 1</Checkbox>
          <br />
          <Checkbox onChange={onChange}>Giang vien 2</Checkbox>
          <br />
          <h3>Gia </h3>
          <Checkbox onChange={onChange}>Checkbox</Checkbox>
          <br />
          <Checkbox onChange={onChange}>Checkbox</Checkbox>
          <br />
          <Checkbox onChange={onChange}>Checkbox</Checkbox>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ViewCourses;
