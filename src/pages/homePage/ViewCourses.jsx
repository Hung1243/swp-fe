import React, { useState } from "react";
import { ClockCircleOutlined } from "@ant-design/icons";
import { AudioOutlined } from "@ant-design/icons";
import { Button, Checkbox, Table } from "antd";
import { Input, Space } from "antd";
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
              <div className="member border mt-3 ">
                <div className="row">
                  {" "}
                  <div className="pic col-4">
                    <img
                      src={item.pictureLink}
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="member-info col-8 pt-5 ">
                    <p>by {item.fullName}</p>
                    <h3>{item.name}</h3>

                    <div className="number d-flex">
                      <div className="time m-2">
                        <ClockCircleOutlined />
                        2weeks
                      </div>
                      <div className="student m-2">
                        <ClockCircleOutlined />
                        10000 student
                      </div>
                      <div className="allLevel m-2">
                        <ClockCircleOutlined />
                        all levels
                      </div>
                      <div className="lesson m-2">
                        <ClockCircleOutlined />
                        20 lessons
                      </div>
                    </div>
                    <hr />
                    <div className="footer d-flex justify-content-between align-items-end">
                      <p>{item.price}$</p>
                      <a href="">view more</a>
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
