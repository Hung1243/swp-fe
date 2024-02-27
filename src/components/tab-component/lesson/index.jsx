import { Collapse, Space } from "antd";
import React from "react";

const text = ``;

export const LessonTab = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "Bài 1: ....",
      children: { text },
    },
    {
      key: "2",
      label: "Bài 2: ....",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "Bài 3: ....",
      children: <p>{text}</p>,
    },
  ];
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
              <p>
                <li>
                  <div>
                    <p></p>
                  </div>
                </li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
              </p>
            ),
          },
        ]}
      />
      <Collapse
        collapsible="icon"
        defaultActiveKey={["1"]}
        items={[
          {
            key: "1",
            label: "This panel can only be collapsed by clicking icon",
            children: <p>{text}</p>,
          },
        ]}
      />
    </Space>
  );
};
