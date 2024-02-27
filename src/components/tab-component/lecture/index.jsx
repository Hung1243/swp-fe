import { Avatar, Button, Card, Col, Flex, Row, Space, Typography } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";

const cardStyle = {
  width: 620,
};
const imgStyle = {
  display: "block",
  width: 273,
};
export const LectureTab = () => {
  return (
    <div>
      <Card
        className="w-100"
        hoverable
        style={cardStyle}
        styles={{
          body: {
            padding: 0,
            overflow: "hidden",
            with: 100,
          },
        }}
      >
        <Flex justify="space-between">
          <img alt="avatar" src="https://i.pravatar.cc" style={imgStyle} />
          <Flex
            vertical
            align="flex-end"
            justify="space-between"
            style={{
              padding: 32,
            }}
          >
            <Typography.Title level={3}>
              antd is an enterprise-class UI design language and React UI
              library.
            </Typography.Title>
          </Flex>
        </Flex>
      </Card>
    </div>
  );
};
