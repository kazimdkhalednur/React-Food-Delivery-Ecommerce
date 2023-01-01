import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

import "../styles/checkout.css";
import storage from "../utils/storage";
import axiosInstance from "../utils/axiosInstance";

const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterAddress, setEnterAddress] = useState("");
  const [enterNumber, setEnterNumber] = useState("");

  const TotalAmount = useSelector((state) => state.cart.totalAmount);

  const submitHandler = (e) => {
    e.preventDefault();

    const cartItems = storage.get("cartItems");
    const createOrder = async () => {
      await axiosInstance
        .post("/order/", {
          cart: cartItems,
          address: enterAddress,
          phone: enterNumber,
        })
        .then((res) => {
          if (res.status === 201) {
            console.log("Order Created");
            // storage.remove("cartItems");
            // storage.remove("totalAmount");
            // storage.remove("totalQuantity");
            const makePayment = async () => {
              await axiosInstance
                .post("/order/payment/", {
                  id: res.data.id,
                })
                .then((e) => {
                  console.log(e.data.url);
                  window.location.replace(e.data.url);
                })
                .catch((e) => e.response);
            };
            makePayment();
          }
        })
        .catch((e) => e.response);
    };
    createOrder();
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your address"
                    required
                    onChange={(e) => setEnterAddress(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Phone number"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>

                <button type="submit" className="addTOCart__btn">
                  Payment
                </button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>৳{TotalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
