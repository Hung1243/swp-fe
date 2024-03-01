import React, { useEffect, useState } from "react";
import {
  CalculatorOutlined,
  ClockCircleOutlined,
  GoldOutlined,
  ReadOutlined,
  TeamOutlined,
  SignalFilled,
} from "@ant-design/icons";
import { Row, Space, Tabs } from "antd";
import { TabComponent } from "../../components/tab-component";
import { LessonTab } from "../../components/tab-component/lesson";
import { OverviewTab } from "../../components/tab-component/overview";
import { LectureTab } from "../../components/tab-component/lecture";
import api from "../../config/axios";
import { useParams } from "react-router";

const onChange = (key) => {
  console.log(key);
};

const CourseDetail = () => {
  const [courseDetail, setCourseDetail] = useState([]);
  const param = useParams();
  const getCourseDetail = async () => {
    try {
      const res = await api.get(`/course/${param.id}`);
      setCourseDetail(res.data);
      console.log(res.data);
    } catch (err) {
      console.error("Error");
    }
  };
  useEffect(() => {
    getCourseDetail();
  });

  const items = [
    {
      label: `Tổng quan`,
      key: 1,
      children: (
        <TabComponent>
          <OverviewTab data={courseDetail} />
        </TabComponent>
      ),
    },
    {
      label: `Giáo trình`,
      key: 2,
      children: (
        <TabComponent>
          <LessonTab data={courseDetail} />
        </TabComponent>
      ),
    },
    {
      label: `Giảng viên`,
      key: 3,
      children: (
        <TabComponent>
          <LectureTab data={courseDetail} />
        </TabComponent>
      ),
    },
    {
      label: `FAQs`,
      key: 4,
      children: `Content of Tab Pane 4`,
    },
    {
      label: `Đánh giá`,
      key: 5,
      children: `Content of Tab Pane 5`,
    },
  ];
  return (
    <>
      <section id="course-detail">
        <div className="content bg-black">
          <div className="container">
            <div className="align-items-center justify-item-center p-5">
              <div className="content-header d-flex text-white">
                <button className="btn btn-secondary">Danh muc</button>
                <p className="text-center m-0 p-2">
                  by <strong>Teacher A</strong>
                </p>
              </div>
              <h1 className="text-white">Course Name</h1>
              <div className="content-footer text-white">
                <Space>
                  <ClockCircleOutlined style={{ color: "#B75757" }} />
                  <p className="m-0 p-1">2 Weeks</p>
                  <TeamOutlined style={{ color: "#B75757" }} />
                  <p className="m-0 p-1">100 Students</p>
                  <SignalFilled style={{ color: "#B75757" }} />
                  <p className="m-0 p-1">All levels</p>
                  <ReadOutlined style={{ color: "#B75757" }} />
                  <p className="m-0 p-1">20 Lesson</p>
                  <CalculatorOutlined style={{ color: "#B75757" }} />
                  <p className="m-0 p-1">10 Quizzes</p>
                </Space>
              </div>
            </div>
          </div>
        </div>

        <div className="container course-info">
          <Row gutter={24}>
            <Tabs
              className="w-75"
              onChange={onChange}
              type="card"
              items={items}
            />
          </Row>
        </div>
      </section>
    </>
  );
};

export default CourseDetail;
