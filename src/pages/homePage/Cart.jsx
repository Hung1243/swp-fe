import { Button, Card, Col, Row } from "antd";
import React from "react";

const Cart = () => {
  return (
    <>
      <section id="cart">
        <div className="container mt-5">
          <h1>Giỏ hàng</h1>
          <Row style={{ marginTop: 30 }}>
            <Col span={18}>
              <h5>Có 1 sản phẩm trong giỏ hàng</h5>
              <hr />
              <div className="cart-item">
                {" "}
                <Row justify="space-around">
                  <Col span={6}>
                    <img src="https://i.pravatar.cc/150" alt="" />
                  </Col>
                  <Col span={6}>
                    <h4>Course Name</h4>
                    <p>
                      Bởi <strong>Giáo viên A</strong>
                    </p>
                  </Col>
                  <Col span={6}>
                    <Button type="primary" danger>
                      Delete
                    </Button>
                  </Col>
                  <Col span={6}>
                    <p>1.000.000đ</p>
                  </Col>
                </Row>
                <hr />
              </div>
              <div className="cart-item">
                {" "}
                <Row justify="space-around">
                  <Col span={6}>
                    <img src="https://i.pravatar.cc/150" alt="" />
                  </Col>
                  <Col span={6}>
                    <h4>Course Name</h4>
                    <p>
                      Bởi <strong>Giáo viên A</strong>
                    </p>
                  </Col>
                  <Col span={6}>
                    <Button type="primary" danger>
                      Delete
                    </Button>
                  </Col>
                  <Col span={6}>
                    <p>1.000.000đ</p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={6}>
              <Card className="mx-5 w-100">
                {" "}
                <div className="checkout center">
                  <h3 className="text-secondary">Tổng:</h3>
                  <h2>1.000.000đ</h2>
                  <Button type="primary" className="w-100">
                    Thanh Toán
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Cart;
