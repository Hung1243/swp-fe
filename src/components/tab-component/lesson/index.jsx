import { Button, Col, Collapse, Flex, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import {
  FileOutlined,
  LockOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import api from "../../../config/axios";
import { useParams } from "react-router";

export const LessonTab = ({ data }) => {
  const onChange = (key) => {
    console.log(key);
  };

  // const [listLesson, setListLesson] = useState([]);
  // const param = useParams();
  // const getListLesson = async () => {
  //   const res = await api.get(`/lesson/courseId?id=${param.id}`);
  //   setListLesson(res.data);
  // };
  // useEffect(() => {
  //   getListLesson();
  // }, []);

  return (
    <Space direction="vertical" className="w-100">
      {data?.map((items) => {
        return (
          <Collapse
            collapsible="header"
            defaultActiveKey={["1"]}
            items={[
              {
                key: "1",
                label: items.name,
                children: (
                  <>
                    {" "}
                    <li className="mb-3 ">
                      <Row style={{ width: "100%" }}>
                        <Col
                          span={20}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                          }}
                        >
                          <PlayCircleOutlined />
                          <p
                            style={{
                              margin: 0,
                            }}
                          >
                            {items.name}
                          </p>
                        </Col>
                        <Col
                          span={4}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                          }}
                        >
                          {" "}
                          <Button type="primary">Preview</Button>
                          <p
                            style={{
                              margin: 0,
                            }}
                          >
                            12:30
                          </p>
                          <LockOutlined />
                        </Col>
                      </Row>
                    </li>
                  </>
                ),
              },
            ]}
          />
        );
      })}
    </Space>
  );
};
