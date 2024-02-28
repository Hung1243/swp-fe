import React, { useState } from "react";
import { Button, Modal, Space, Table, Tag } from "antd";
import AddNewCourse from "./AddNewCourse";
import { useForm } from "antd/es/form/Form";
import api from "../../config/axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addChapter,
  addInfo,
  removeCourse,
  updateID,
} from "../../redux/feature/courseSlice";

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
];
const Courses = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [form1] = useForm();
  const [form3] = useForm();
  const dispatch = useDispatch();
  const chapter = useSelector((store) => store.course.chapter);
  const lesson = useSelector((store) => store.course.lesson);
  const courseRedux = useSelector((store) => store.course);
  const [course, setCourse] = useState(null);
  const [listChapter, setListChapter] = useState();

  const onSubmitForm1 = async (values) => {
    console.log("Received values:", values);
    try {
      if (course == null) {
        const response = await api.post("/course", values);
        dispatch(addInfo(response.data));
        dispatch(updateID(response.data.id));
        setCourse(response.data);
        setCurrent(current + 1);
      } else {
        const response = await api.put(`/course/${course.id}`, values);
        dispatch(addInfo(response.data));
        dispatch(updateID(response.data.id));
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
      if (chapter == null) {
        const response = await api.post(
          "/chapters",
          chapter.map((item) => {
            return {
              name: item.name,
              course_id: courseRedux.id,
            };
          })
        );
        setListChapter(response.data);
        dispatch(addChapter(response.data));
        setCurrent(current + 1);
      } else {
        const response = await api.put(
          `/chapters?id=${course.id}`,
          chapter.map((item) => {
            return {
              name: item.name,
              course_id: courseRedux.id,
            };
          })
        );
        dispatch(addChapter(response.data));

        setCurrent(current + 1);
      }
      setCurrent(current + 1);
    } catch (e) {
      console.log(e);
    }
  };
  const onSubmitForm3 = async (values) => {
    try {
      if (course == null) {
        const response = await api.post("/lesson",lesson.map(()=>{
          return{
            
          }
        }))
        dispatch(addInfo(response.data));
        dispatch(updateID(response.data.id));
        setCourse(response.data);
        setCurrent(current + 1);
      } else {
        const response = await api.put(`/course/${course.id}`, values);
        dispatch(addInfo(response.data));
        dispatch(updateID(response.data.id));
        setCourse(response.data);
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
      onSubmitForm2();
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
        onCancel={() => {
          setOpen(false);
          dispatch(removeCourse());
        }}
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
        />
      </Modal>
    </>
  );
};
export default Courses;
