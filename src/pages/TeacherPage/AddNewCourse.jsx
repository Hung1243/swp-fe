import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  Input,
  message,
  Row,
  Select,
  Space,
  Steps,
  Table,
  Tag,
  theme,
} from "antd";
import TextArea from "antd/es/input/TextArea";

import { useForm } from "antd/es/form/Form";
import { uploadFile } from "../../utils/upload";
import api from "../../config/axios";

const CourseInfoForm = ({ form1, onSubmitForm1 }) => {
  const [categories, setCategories] = useState([]);
  const fetchCategory = async (values) => {
    console.log("Received values:", values);
    try {
      const response = await api.get("/category");
      setCategories(response.data);
    } catch (e) {}
  };
  useEffect(() => {
    fetchCategory();
  }, []);
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  return (
    <>
      <Form
        form={form1}
        onFinish={onSubmitForm1}
        labelCol={{
          span: 24,
        }}
      >
        <Row gutter={12}>
          <Col span={12}>
            <Form.Item
              wrapperCol={12}
              name="courseID"
              label="Mã môn"
              rules={[
                {
                  required: true,
                  message: "Không được để trống ",
                },
              ]}
            >
              <Input></Input>
            </Form.Item>{" "}
          </Col>
          <Col span={12}>
            <Form.Item
              wrapperCol={12}
              name="name"
              label="Tên môn"
              rules={[
                {
                  required: true,
                  message: "Không được để trống ",
                },
              ]}
            >
              <Input></Input>
            </Form.Item>{" "}
          </Col>
          <Col span={12}>
            <Form.Item
              name="pictureLink"
              label="Hình ảnh"
              rules={[
                {
                  required: true,
                  message: "Không được để trống ",
                },
              ]}
            >
              <Input
                type="file"
                onChange={async (e) => {
                  const url = await uploadFile(e.target.files[0]);
                  console.log(url);
                }}
                rules={[
                  {
                    required: true,
                    message: "Không được để trống ",
                  },
                ]}
              ></Input>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="categoryId"
              label="Danh mục"
              rules={[
                {
                  required: true,
                  message: "Không được để trống ",
                },
              ]}
            >
              <Select
                showSearch
                placeholder="Chọn danh mục"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                options={categories.map((item) => {
                  return {
                    label: item.name,
                    value: item.id,
                  };
                })}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="description"
              label="Mô tả"
              rules={[
                {
                  required: true,
                  message: "Không được để trống ",
                },
              ]}
            >
              <TextArea />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              wrapperCol={12}
              name="price"
              label="Giá tiền"
              rules={[
                {
                  required: true,
                  message: "Không được để trống ",
                },
              ]}
            >
              <Input></Input>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};
const CourseChapterForm = ({ form2, onSubmitForm2 }) => {
  const [inputValue, setInputValue] = useState();
  const handleDone = (index) => {
    data[index].status = "done";
    data[index].name = inputValue;
    setData([...data]);
    setInputValue();
  };
  const [data, setData] = useState([
    {
      key: "1",
      name: "John Brown",
      status: "done",
    },
  ]);
  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "number",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tên chương",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Action",
      key: "action",
      render: (abc, record, index) => (
        <Space size="middle">
          <Button danger type="primary">
            Delete
          </Button>
          {record.status === "edit" ? (
            <Button
              type="primary"
              onClick={() => {
                handleDone(index);
                // console.log(index);
              }}
            >
              Done
            </Button>
          ) : (
            <Button type="primary">Update</Button>
          )}
        </Space>
      ),
    },
  ];

  return (
    <>
      <Button
        className="m-2"
        onClick={() => {
          setData([
            ...data,
            {
              name: (
                <input
                  value={inputValue}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setInputValue(e.target.value);
                  }}
                />
              ),
              status: "edit",
            },
          ]);
        }}
      >
        + Thêm
      </Button>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

const CourseLessonForm = () => {
  const onFinish = async (values) => {
    console.log("Received values:", values);
    try {
      const response = await api.post("/lesson", values);
    } catch (e) {}
  };
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  return (
    <>
      <Row gutter={12}>
        <Col span={12}>
          <Form.Item name="categoryId" label="Chương">
            <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item wrapperCol={12} name="lessonName" label="Tên bài giảng">
            <Input></Input>
          </Form.Item>{" "}
        </Col>
        <Col span={12}>
          <Form.Item wrapperCol={12} name="videoLink" label="Thêm video">
            <Input
              type="file"
              onChange={async (e) => {
                const url = await uploadFile(e.target.files[0]);
                console.log(url);
              }}
            ></Input>
          </Form.Item>{" "}
        </Col>
        <Col span={12}>
          <Form.Item name="quizLink" label="Thêm bài tập">
            <Input
              type="file"
              onChange={async (e) => {
                const url = await uploadFile(e.target.files[0]);
                console.log(url);
              }}
            ></Input>
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

const AddNewCourse = ({ current, onSubmitForm1, form1 }) => {
  const { token } = theme.useToken();
  const [form] = useForm();

  const steps = [
    {
      title: "Tạo khóa học",
      content: <CourseInfoForm form1={form1} onSubmitForm1={onSubmitForm1} />,
    },
    {
      title: "Thêm chương",
      content: <CourseChapterForm />,
    },
    {
      title: "Thêm bài học / Bài kiểm tra",
      content: <CourseLessonForm />,
    },
  ];
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  return (
    <>
      <Steps current={current} items={items} />
      <Form
        form={form}
        onFinish={(values) => {
          console.log(values);
        }}
        labelCol={{
          span: 24,
        }}
      >
        {steps.map((item, index) => {
          console.log(item);
          return (
            <div className={index != current ? "d-none" : ""}>
              {item.content}
            </div>
          );
        })}
      </Form>
      <div
        style={{
          marginTop: 24,
        }}
      ></div>
    </>
  );
};

export default AddNewCourse;
