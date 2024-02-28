import { Button, Col, Collapse, Row, Space } from "antd";
import React from "react";
const text = `
  
`;
const items = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
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
        <div className="my-course-header bg-black p-5 ">
          <div className="container">
            <Space align="baseline">
              <button className="btn btn-secondary">Danh muc 1</button>{" "}
              <p className="text-white">
                by <strong>teacher A</strong>
              </p>
            </Space>

            <h1 className=" text-white ">TÊN MÔN HỌC 1</h1>
          </div>
        </div>
        <div className="my-course-content">
          <Row gutter={24}>
            <Col span={18}>
              <img src="https://i.pravatar.cc/103" alt="" />
            </Col>
            <Col span={6}><Collapse items={items} defaultActiveKey={['1']} onChange={onChange} /></Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default MyCourseDetail;
