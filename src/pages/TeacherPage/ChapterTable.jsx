import { Button, Input, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import "./chapter-table.css";
import api from "../../config/axios";

export const ChapterTable = ({ id }) => {
  const [listChapter, setListChapter] = useState([]);
  const columns = [
    {
      title: "Chapter name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button danger type="primary">
            Delete
          </Button>
          <Button type="primary">Edit</Button>
        </Space>
      ),
    },
  ];

  const getListChapter = async () => {
    const res = await api.get(`/chapters/courseId?id=${id}`);
    setListChapter(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getListChapter();
  }, []);

  const data = listChapter.map((items) => {
    return {
      key: items.index,
      name: items.name,
      id: items.id,
    };
  });

  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      <Button type="primary">Add new Chapter</Button>
      <Table
        style={{
          width: "100%",
        }}
        columns={columns}
        expandable={{
          expandedRowRender: (record) => <Lesson chapterId={record.id} />,
        }}
        dataSource={data}
      />
    </div>
  );
};

const Lesson = ({ chapterId }) => {
  const [listLesson, setListLesson] = useState([]);
  const getLesson = async () => {
    const res = await api.get(`/lesson/courseId?id=${chapterId}`);
    setListLesson(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    getLesson();
  }, []);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Video Link",
      dataIndex: "videoLink",
      key: "videoLink",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Quiz Link",
      dataIndex: "quizLink",
      key: "quizLink",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => {
        return (
          <Space>
            <Button type="primary" danger>
              Delete
            </Button>
            <Button type="primary">Edit</Button>
          </Space>
        );
      },
    },
  ];

  const data = listLesson.map((lesson) => {
    return {
      key: lesson.id,
      name: lesson.name,
      videoLink: lesson.videoLink,
      quizLink: lesson.quizLink,
    };
  });

  return (
    <div
      className="lesson"
      style={{
        backgroundColor: "#ffface",
      }}
    >
      <Button className="lesson__button" type="primary">
        Add Lesson
      </Button>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};
