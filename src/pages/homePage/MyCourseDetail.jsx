import { Button, Col, Collapse, Row, Space } from "antd";
import React from "react";
const text = `
  
`;
const items = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];

const MyCourseDetail = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <>
      <section id="my-course-detail">
        <div className="my-course-content">
          <Row gutter={24}>
            <Col span={18}>
              <img src="https://i.pravatar.cc/103" alt="" />
            </Col>
            <Col span={6}>
              <Collapse
                items={items}
                defaultActiveKey={["1"]}
                onChange={onChange}
              />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default MyCourseDetail;
