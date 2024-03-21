import { Button, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import api from "../../config/axios";

const columns = [
  {
    title: "STT",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Danh mục",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Mã khóa học",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Tên khóa học",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Mô tả",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Hình ảnh",
    dataIndex: "pictureLink",
    key: "pictureLink",
    render: (pictureLink) => (
      <img src={pictureLink} alt="Hình ảnh" style={{ maxWidth: "100px" }} />
    ),
  },
  {
    title: "Người tạo",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <Button type="primary">Sửa</Button>
        <Button type="primary" danger>
          Xóa
        </Button>
      </Space>
    ),
  },
];

const CourseManagement = () => {
  const [listCourse, setListCourse] = useState([]);
  const getCourse = async () => {
    try {
      const res = await api.get("/course");
      console.log(res.data);
      setListCourse(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getCourse();
  }, []);
  const data = listCourse.map((item) => {
    return {
      key: "1",
      category: item.category.name,
      id: item.id,
      name: item.name,
      description: item.description,
      pictureLink: item.pictureLink,
      fullName: item.createBy.fullName,
    };
  });
  return (
    <>
      <Table
        pagination={{
          pageSize: 3,
        }}
        columns={columns}
        dataSource={data}
      />
    </>
  );
};

export default CourseManagement;
