import { Button, Col, Collapse, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import api from "../../config/axios";
import { useParams } from "react-router";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

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
    console.log(myCourseDetail?.lessons[0].videoLink);
    if (myCourseDetail) {
      setItems(
        myCourseDetail.chapters.map((item) => {
          return {
            key: item.id,
            label: item.name,
            children: (
              <ul>
                {myCourseDetail?.lessons
                  .filter((lesson) => lesson.chapter_id === item.id)
                  .map((lesson) => {
                    return (
                      <Link to={`?lessonId=${lesson.id}`}>
                        <li className="list-unstyled ">{lesson.name}</li>
                      </Link>
                    );
                  })}
              </ul>
            ),
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
              <video
                width="1170"
                height="100%"
                controls
                src={myCourseDetail?.lessons[0].videoLink}
              ></video>
              {/* <ReactPlayer p url={myCourseDetail?.lessons[0].videoLink} /> */}
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
