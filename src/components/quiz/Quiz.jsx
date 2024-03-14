import React, { useEffect, useState } from "react";
import { Button, Col, Input, Modal, Radio, Row, Space } from "antd";
import api from "../../config/axios";
import { useParams } from "react-router";
import { toast } from "react-toastify";
const Quiz = ({ id }) => {
  const [value, setValue] = useState([]);
  const [answers, setAnswers] = useState([]);

  const [quiz, setQuiz] = useState([]);
  const [quizId, setQuizId] = useState();
  const getQuiz = async () => {
    const res = await api.get(`/quiz/lessonId?id=${id}`);
    setQuiz(res.data.quizQuestion);
    setQuizId(res.data.id);
  };
  useEffect(() => {
    getQuiz();
  }, []);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onChangeOption = (index, value) => {
    answers[index] = value;
    setAnswers([...answers]);
  };

  const submitAnswer = async () => {
    console.log(quiz);
    const res = await api.post("/quizResult", {
      quizId: Number(quizId),
      answerIds: answers,
    });
    Modal.success({
      title: `Chúc mừng ${res.data.doBy.fullName} đã hoàn thành!`,
      content: (
        <div>
          <h5>Bạn đạt được {res.data.score} điểm</h5>
          <p>Số câu đúng : {res.data.trueAnswerNumber} </p>
          <p>Số câu sai: {res.data.falseAnswerNumber} </p>
        </div>
      ),
    });
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
                  <Radio.Group
                    onChange={(e) => {
                      onChangeOption(index, e.target.value);
                    }}
                  >
                    <Space direction="vertical">
                      {item.quizAnswers?.map((option, i) => (
                        <Radio name={item.question} key={i} value={option.id}>
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
        <Button
          type="primary"
          onClick={() => {
            console.log(answers);
            submitAnswer();
          }}
        >
          Submit
        </Button>
      </Space>
    </div>
  );
};

export default Quiz;
