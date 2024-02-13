import React, { useState } from "react";
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
  theme,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import { uploadFile } from "../../utils/upload";

const CourseInfoForm = () => {
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
          <Form.Item wrapperCol={12} name="courseID" label="Mã môn">
            <Input></Input>
          </Form.Item>{" "}
        </Col>
        <Col span={12}>
          <Form.Item wrapperCol={12} name="name" label="Tên môn">
            <Input></Input>
          </Form.Item>{" "}
        </Col>
        <Col span={12}>
          <Form.Item name="pictureLink" label="Hình ảnh">
            <Input
              type="file"
              onChange={async (e) => {
                const url = await uploadFile(e.target.files[0]);
                console.log(url);
              }}
            ></Input>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="categoryId" label="Danh mục">
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
        <Col span={24}>
          <Form.Item name="name" label="Name">
            <TextArea />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};
const CourseChapterForm = () => {
  return (
    <Form.List name="users">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => {
            console.log(fields);
            return (
              <Space
                key={key}
                style={{
                  display: "flex",
                  marginBottom: 8,
                }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, "first"]}
                  rules={[
                    {
                      required: true,
                      message: "Missing first name",
                    },
                  ]}
                >
                  <Input placeholder="Mã chương" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "last"]}
                  rules={[
                    {
                      required: true,
                      message: "Missing last name",
                    },
                  ]}
                >
                  <Input placeholder="Tên chương" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            );
          })}
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => add()}
              block
              icon={<PlusOutlined />}
            >
              Add field
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );
};

const CourseLessonForm = () => {
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

const AddNewCourse = ({ onSubmit }) => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [form] = useForm();
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  const steps = [
    {
      title: "Tạo khóa học",
      content: <CourseInfoForm />,
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
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
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
      </div>
    </>
  );
};
export default AddNewCourse;
