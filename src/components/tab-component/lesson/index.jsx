import { Button, Collapse, Space } from "antd";
import React from "react";
import {
  FileOutlined,
  LockOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";

const text = ``;

export const LessonTab = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Space direction="vertical" className="w-100">
      <Collapse
        collapsible="header"
        defaultActiveKey={["1"]}
        items={[
          {
            key: "1",
            label: "Bài 1:...",
            children: (
              <>
                {" "}
                <li>
                  <Space align="baseline">
                    <PlayCircleOutlined />
                    <p>Bài học 1</p>
                    <Button type="primary">Preview</Button>
                    <p>12:30</p>
                    <LockOutlined />
                  </Space>
                </li>
                <li>
                  <Space align="baseline">
                    <PlayCircleOutlined />
                    <p>Bài học 1</p>
                    <Button type="primary">Preview</Button>
                    <p>12:30</p>
                    <LockOutlined />
                  </Space>
                </li>{" "}
                <li>
                  <Space align="baseline">
                    <PlayCircleOutlined />
                    <p>Bài học 1</p>
                    <Button type="primary">Preview</Button>
                    <p>12:30</p>
                    <LockOutlined />
                  </Space>
                </li>
              </>
            ),
          },
        ]}
      />
      <Collapse
        collapsible="header"
        defaultActiveKey={["1"]}
        items={[
          {
            key: "1",
            label: "Bài 1:...",
            children: (
              <>
                {" "}
                <li>
                  <Space align="baseline">
                    <PlayCircleOutlined />
                    <p>Bài học 1</p>
                    <Button type="primary">Preview</Button>
                    <p>12:30</p>
                    <LockOutlined />
                  </Space>
                </li>
                <li>
                  <Space align="baseline">
                    <PlayCircleOutlined />
                    <p>Bài học 1</p>
                    <Button type="primary">Preview</Button>
                    <p>12:30</p>
                    <LockOutlined />
                  </Space>
                </li>{" "}
                <li>
                  <Space align="baseline">
                    <PlayCircleOutlined />
                    <p>Bài học 1</p>
                    <Button type="primary">Preview</Button>
                    <p>12:30</p>
                    <LockOutlined />
                  </Space>
                </li>
              </>
            ),
          },
        ]}
      />
      <Collapse
        collapsible="header"
        defaultActiveKey={["1"]}
        items={[
          {
            key: "1",
            label: "Bài 1:...",
            children: (
              <>
                {" "}
                <li>
                  <Space align="baseline">
                    <PlayCircleOutlined />
                    <p>Bài học 1</p>
                    <Button type="primary">Preview</Button>
                    <p>12:30</p>
                    <LockOutlined />
                  </Space>
                </li>
                <li>
                  <Space align="baseline">
                    <PlayCircleOutlined />
                    <p>Bài học 1</p>
                    <Button type="primary">Preview</Button>
                    <p>12:30</p>
                    <LockOutlined />
                  </Space>
                </li>{" "}
                <li>
                  <Space align="baseline">
                    <PlayCircleOutlined />
                    <p>Bài học 1</p>
                    <Button type="primary">Preview</Button>
                    <p>12:30</p>
                    <LockOutlined />
                  </Space>
                </li>
              </>
            ),
          },
        ]}
      />
      <Collapse
        collapsible="header"
        defaultActiveKey={["1"]}
        items={[
          {
            key: "1",
            label: "Bài 1:...",
            children: (
              <>
                {" "}
                <li>
                  <Space align="baseline">
                    <PlayCircleOutlined />
                    <p>Bài học 1</p>
                    <Button type="primary">Preview</Button>
                    <p>12:30</p>
                    <LockOutlined />
                  </Space>
                </li>
                <li>
                  <Space align="baseline">
                    <PlayCircleOutlined />
                    <p>Bài học 1</p>
                    <Button type="primary">Preview</Button>
                    <p>12:30</p>
                    <LockOutlined />
                  </Space>
                </li>{" "}
                <li>
                  <Space align="baseline">
                    <PlayCircleOutlined />
                    <p>Bài học 1</p>
                    <Button type="primary">Preview</Button>
                    <p>12:30</p>
                    <LockOutlined />
                  </Space>
                </li>
              </>
            ),
          },
        ]}
      />
    </Space>
  );
};
