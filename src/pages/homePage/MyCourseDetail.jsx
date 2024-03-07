import { Button, Col, Collapse, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import api from "../../config/axios";
import { useParams } from "react-router";

const MyCourseDetail = () => {
  const params = useParams();
  const onChange = (key) => {
    console.log(key);
  };
  const [myCourseDetail, setMyCourseDetail] = useState(null);
  const getCourseDetail = async () => {
    const res = await api.get(`/courseDetail/${params.id}`);
    setMyCourseDetail(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getCourseDetail();
  }, []);

  const [items, setItems] = useState([]);
  // const [lessons, setLessons] = useState([]);

  useEffect(() => {
    if (myCourseDetail) {
      setItems(
        myCourseDetail.chapters.map((items) => {
          return {
            key: "1",
            label: items.name,
            children: myCourseDetail?.lessons.map((items) => {
              return (
                <ul>
                  <li className="list-unstyled ">{items.name}</li>
                </ul>
              );
            }),
          };
        })
      );
    }
  }, [myCourseDetail]);

  return (
    <>
      <section id="my-course-detail">
        <div className="my-course-content">
          <Row gutter={24}>
            <Col span={18}>
              <video width="1170" height="100%" controls>
                <source
                  src={myCourseDetail?.lessons[0].videoLink}
                  type="video/mp4"
                />
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
