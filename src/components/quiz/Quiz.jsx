import React, { useEffect, useState } from "react";
import { Button, Col, Input, Radio, Row, Space } from "antd";
import api from "../../config/axios";
import { useParams } from "react-router";

const Quiz = ({ id }) => {
  const [value, setValue] = useState([]);

  const [quiz, setQuiz] = useState([]);
  const getQuiz = async () => {
    const res = await api.get(`/quiz/lessonId?id=${id}`);
    setQuiz(res.data.quizQuestion);
    console.log(res.data);
  };
  useEffect(() => {
    getQuiz();
  }, []);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="container">
      <Space direction="vertical" style={{ width: "100%" }}>
        {quiz.map((item, index) => {
          console.log(item);
          return (
            <React.Fragment key={index}>
              <Row gutter={24}>
                <Col span={22} style={{ paddingLeft: "200px" }}>
                  {" "}
                  <h3>
                    {item.questionNumber}: {item.questionContent}
                  </h3>
                  <Radio.Group onChange={onChange}>
                    <Space direction="vertical">
                      {item.quizAnswers?.map((option, i) => (
                        <Radio name={item.question} key={i} value={i + 1}>
                          {option.answerContent}
                        </Radio>
                      ))}
                    </Space>
                  </Radio.Group>
                </Col>
                <Col span={2}>
                  <Button style={{ borderRadius: "20px " }}> 1 điểm</Button>
                </Col>
              </Row>
            </React.Fragment>
          );
        })}
        <Button type="primary">Submit</Button>
      </Space>
    </div>
  );
};

export default Quiz;
