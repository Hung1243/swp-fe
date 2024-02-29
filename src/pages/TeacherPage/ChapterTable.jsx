import { Button, Input, Space, Table, Tag } from "antd";
import React from "react";
import "./chapter-table.css";
export const ChapterTable = () => {
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
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "Chapter 1",
    },
    {
      key: "2",
      name: "Chapter 2",
    },
    {
      key: "3",
      name: "Chapter 3",
    },
  ];
  
  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      <Button type="primary" >Add new Chapter</Button>
      <Table
        style={{
          width: "100%",
        }}
        columns={columns}
        expandable={{
          expandedRowRender: Lesson,
        }}
        dataSource={data}
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
        if (record.status === "edit") {
          return <Input />;
        }
        return { text };
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Acount",
      dataIndex: "action",
      key: "action",
      render: (text, record) => {
        if (record.status === "edit") {
          return <Button type="primary">Done</Button>;
        }
        return (
          <Button type="primary" danger>
            Delete
          </Button>
        );
      },
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      status: "done",
    },
    {
      key: "1",
      name: "John Brown",
      status: "edit",
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
