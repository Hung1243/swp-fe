import React, { useState } from "react";
import { Button, Modal, Space, Table, Tag } from "antd";
import AddNewCourse from "./AddNewCourse";
import { useForm } from "antd/es/form/Form";
import api from "../../config/axios";

const columns = [
  {
    title: "STT",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Danh mục",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Mã khóa học",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tên khóa học",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Mô tả",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Hình ảnh",
    dataIndex: "address",
    key: "address",
  },
  // {
  //   title: "Tags",
  //   key: "tags",
  //   dataIndex: "tags",
  //   render: (_, { tags }) => (
  //     <>
  //       {tags.map((tag) => {
  //         let color = tag.length > 5 ? "geekblue" : "green";
  //         if (tag === "loser") {
  //           color = "volcano";
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
];
const Courses = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [form1] = useForm();
  const [form2] = useForm();

  const [course, setCourse] = useState(null);

  const onSubmitForm1 = async (values) => {
    console.log("Received values:", values);
    try {
      if (course == null) {
        const response = await api.post("/course", values);

        setCourse(response.data);
        setCurrent(current + 1);
      } else {
        const response = await api.put(`/course/${course.id}`, values);
        setCourse(response.data);
        setCurrent(current + 1);
      }
      console.log(current);
      setCurrent(current + 1);
    } catch (e) {
      console.log(e);
    }
  };
  const onSubmitForm2 = async (values) => {
    try {
      if (course == null) {
        const response = await api.post("/chapter", values);

        // setCourse(response.data);
        setCurrent(current + 1);
      } else {
        const response = await api.put(`/chapter/${chapter.id}`, values);
        // setCourse(response.data);
        setCurrent(current + 1);
      }
      console.log(current);
      setCurrent(current + 1);
    } catch (e) {
      console.log(e);
    }
  };

  const next = () => {
    console.log(current);
    if (current == 0) {
      form1.submit();
    } else if (current == 1) {
      form2.submit();
    }
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        + Thêm
      </Button>
      <Table
        pagination={{
          pageSize: 8,
        }}
        columns={columns}
        dataSource={data}
      />
      <Modal
        title="Tạo khóa học"
        centered
        open={open}
        onOk={() => next()}
        onCancel={() => setOpen(false)}
        width={1000}
        okText={current < 2 ? "Next" : "Done"}
        cancelText={""}
        footer={
          <>
            {current > 0 && (
              <Button
                style={{
                  margin: "0 8px",
                }}
                onClick={() => prev()}
              >
                Previous
              </Button>
            )}
            {current < 2 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === 2 && (
              <Button
                type="primary"
                onClick={() => {
                  console.log(123);
                  form.submit();
                }}
              >
                Done
              </Button>
            )}
          </>
        }
      >
        <AddNewCourse
          current={current}
          onSubmitForm1={onSubmitForm1}
          form1={form1}
          onSubmitForm2={onSubmitForm2}
          form2={form2}
        />
      </Modal>
    </>
  );
};
export default Courses;
