import { Button, Card, Col, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/feature/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);
  console.log(cartItems);
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  return (
    <>
      <section id="cart">
        <div className="container mt-5">
          <h1>Giỏ hàng</h1>
          <Row style={{ marginTop: 30 }}>
            <Col span={18}>
              <h5>Có {cartItems.length} sản phẩm trong giỏ hàng</h5>
              <hr />
              {cartItems.map((item) => {
                return (
                  <div className="cart-item" key={item.id}>
                    {" "}
                    <Row justify="space-around">
                      <Col span={6}>
                        <img
                          src={item.pictureLink}
                          alt=""
                          style={{ width: "100px", height: "100px" }}
                        />
                      </Col>
                      <Col span={6}>
                        <h4>{item.name}</h4>
                        <p>
                          Bởi <strong>{item.createBy.fullName}</strong>
                        </p>
                      </Col>
                      <Col span={6}>
                        <Button
                          type="primary"
                          danger
                          onClick={() => handleRemoveFromCart(item)}
                        >
                          Delete
                        </Button>
                      </Col>
                      <Col span={6}>
                        <p>{item.price}đ</p>
                      </Col>
                    </Row>
                    <hr />
                  </div>
                );
              })}
            </Col>
            <Col span={6}>
              <Card className="mx-5 w-100">
                {" "}
                <div className="checkout center">
                  <h3 className="text-secondary">Tổng:</h3>
                  <h2>
                    {cartItems.reduce((total, item) => total + item.price, 0)}đ
                  </h2>
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
