import React, { useEffect, useState } from "react";
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
import api from "../../config/axios";
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

const ViewCourses = () => {
  const [listCourses, setListCourses] = useState([]);
  const [listCategories, setListCategories] = useState([]);
  const getCourses = async () => {
    try {
      const res = await api.get("/course");
      setListCourses(res.data);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getCourses();
  }, []);
  const getCategories = async () => {
    try {
      const res = await api.get("/category");
      setListCategories(res.data);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <section id="view-courses">
      <div className="container mt-5">
        <div className="row">
          {" "}
          <div className="viewCourse col-9 ">
            <div className="d-flex justify-content-between">
              <h1>All Course</h1>
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
            {listCourses.map((item) => {
              return (
                <div className="member border mt-3  ">
                  <div className="row">
                    {" "}
                    <div className="pic col-4">
                      <img
                        style={{ width: "300px", height: "200px" }}
                        src={item.pictureLink}
                        className="img-fluid"
                        alt={item.name}
                      />
                    </div>
                    <div className="member-info col-8 pt-1 ">
                      <p>
                        by <strong>{item.createBy.username}</strong>
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
                      <hr className="m-2" />
                      <div className="footer d-flex justify-content-between align-items-center">
                        <p className="fs-4 fw-bold text-dark">{item.price}$</p>
                        <Link
                          className="text-decoration-none text-dark"
                          to={`/course/${item.id}`}
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
            {listCategories.map((cat) => {
              return (
                <>
                  <Checkbox onChange={onChange}>{cat.name}</Checkbox>
                  <br />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewCourses;
