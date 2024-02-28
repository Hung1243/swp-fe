import React from "react";
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

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    label: `Tổng quan`,
    key: 1,
    children: (
      <TabComponent>
        <OverviewTab />
      </TabComponent>
    ),
  },
  {
    label: `Giáo trình`,
    key: 2,
    children: (
      <TabComponent>
        <LessonTab />
      </TabComponent>
    ),
  },
  {
    label: `Giảng viên`,
    key: 3,
    children: (
      <TabComponent>
        <LectureTab />
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

const CourseDetail = () => {
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
