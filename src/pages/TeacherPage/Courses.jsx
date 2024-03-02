import React, { useEffect, useState } from "react";
import { Button, Modal, Space, Table, Tag } from "antd";
import AddNewCourse from "./AddNewCourse";
import { useForm } from "antd/es/form/Form";
import api from "../../config/axios";
import { useDispatch, useSelector } from "react-redux";
// import {
//   addChapter,
//   addInfo,
//   addLesson,
//   removeCourse,
//   updateID,
//   updateStep,
// } from "../../redux/feature/courseSlice";
import axios from "axios";

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
        <Button type="primary">Edit</Button>
      </Space>
    ),
  },
];

const Courses = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [form1] = useForm();
  const [form3] = useForm();
  const dispatch = useDispatch();
  const chapter = useSelector((store) => store.course.chapter);
  const step = useSelector((store) => store.course.step);
  const lesson = useSelector((store) => store.course.lesson);
  const courseRedux = useSelector((store) => store.course);
  const [course, setCourse] = useState(null);
  const [listChapter, setListChapter] = useState();
  const [listLesson, setListLesson] = useState();
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
  // const data = [];
  const onSubmitForm1 = async (values) => {
    console.log("Received values:", values);
    try {
      if (course == null) {
        const response = await api.post("/course", values);
        dispatch(addInfo(response.data));
        dispatch(updateID(response.data.id));
        setCourse(response.data);
        setCurrent(current + 1);
        dispatch(updateStep(1));
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
      if (step == 1) {
        const response = await api.post(
          "/chapters",
          chapter.map((item) => {
            return {
              name: item.name,
              course_id: courseRedux.id,
            };
          })
        );
        dispatch(updateStep(2));
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
        setListChapter(response.data);
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
      if (step == 2) {
        const response = await api.post(
          "/lesson",
          lesson.map((item) => {
            return {
              name: item.name,
              description: item.description,
              videoLink: item.videoLink,
              chapter_id: item.chapter_id,
            };
          })
        );
        dispatch(updateStep(3));
        dispatch(addLesson(response.data));
        dispatch(updateID(response.data.id));
        setListLesson(response.data);
      } else {
        const response = await api.put(`/lesson/${course.id}`, values);
        dispatch(addLesson(response.data));
        dispatch(updateID(response.data.id));
        setListLesson(response.data);
        setCurrent(current + 1);
      }
      console.log(current);
      // setCurrent(current + 1);
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
          dispatch(removeCourse());
          setOpen(true);
        }}
      >
        + Thêm
      </Button>
      <Table
        pagination={{
          pageSize: 6,
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
        width={1500}
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
                  onSubmitForm3();
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
          onSubmitForm3={onSubmitForm3}
        />
      </Modal>
    </>
  );
};
export default Courses;
