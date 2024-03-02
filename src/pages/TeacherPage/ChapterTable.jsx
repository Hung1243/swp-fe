import { Button, Input, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import "./chapter-table.css";
import api from "../../config/axios";
export const ChapterTable = () => {
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
    const res = await api.get(`/chapter`);
    setListChapter(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getListChapter();
  }, []);

  listChapter.map((items) => {
    return {
      key: items.index,
      name: items.name,
    };
  });

  // const data = [
  //   {
  //     key: "1",
  //     name: "Chapter 1",
  //   },
  //   {
  //     key: "2",
  //     name: "Chapter 2",
  //   },
  //   {
  //     key: "3",
  //     name: "Chapter 3",
  //   },
  // ];

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
          expandedRowRender: Lesson,
        }}
        dataSource={listChapter}
      />
    </div>
  );
};

const Lesson = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => {
        // if (record.status === "edit") {
        //   return <Input />;
        // }
        // return { text };
      },
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
  const data = [
    {
      key: "1",
      name: "John Brown",
      videoLink: "",
      quizLink: "",
      // status: "done",
    },
  ];
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
