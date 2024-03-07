import { Button, Col, Collapse, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import api from "../../config/axios";
import { useParams } from "react-router";
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
  const params = useParams();
  const onChange = (key) => {
    console.log(key);
  };
  const [myCourseDetail, setMyCourseDetail] = useState([]);
  const getCourseDetail = async () => {
    const res = await api.get(`/courseDetail/${params.id}`);
    setMyCourseDetail(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getCourseDetail();
  }, []);

  return (
    <>
      <section id="my-course-detail">
        <div className="my-course-content">
          <Row gutter={24}>
            <Col span={18}>
              <video width="1100" height="100%" controls>
                <source src={myCourseDetail.videoLink} type="video/mp4" />
              </video>
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
