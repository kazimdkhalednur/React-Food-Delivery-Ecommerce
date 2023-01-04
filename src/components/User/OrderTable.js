import React, { useEffect, useState } from "react";
import { Alert, Col, Row, Table } from "reactstrap";

import Badge from "react-bootstrap/Badge";
import axiosInstance from "../../utils/axiosInstance";
import storage from "../../utils/storage";

function OrderTable() {
  const [orders, setOrders] = useState();
  const fetchOrders = async () => {
    const response = await axiosInstance.get("order/list");
    setOrders(response.data);
  };
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  let success = params.success;
  useEffect(() => {
    fetchOrders();
  }, []);

  const [isAlertVisible, setIsAlertVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsAlertVisible(false);
      storage.remove("message");
    }, 3000);
  });

  return (
    <Row className="my-3">
      <Col className="col-md-10 m-auto">
        {success && isAlertVisible ? (
          <Alert color="primary">Order placed successfully</Alert>
        ) : undefined}
        <h1 className="mb-3 text-center">
          <u>ORDER TABLE</u>
        </h1>
        <Table borderless hover striped responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Order ID</th>
              <th>Products</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, id) => (
              <tr key={id}>
                <th scope="row">{id + 1}</th>
                <td>
                  {order.pending_payment_url ? (
                    <a href={order.pending_payment_url}>
                      <u>{order.order_id}</u>
                      <br />
                      (click here for pending payment)
                    </a>
                  ) : (
                    order.order_id
                  )}
                </td>
                <td>
                  {order.cart.map((item) => (
                    <>
                      {item.quantity} x {item.food.title}
                      <br />
                    </>
                  ))}
                </td>
                <td>৳{order.amount}</td>
                <td>
                  {order.status === "pending" ? (
                    <Badge bg="danger">Pending</Badge>
                  ) : order.status === "paid" ? (
                    <Badge bg="success">Paid</Badge>
                  ) : order.status === "on_the_way" ? (
                    <Badge bg="warning">On the way</Badge>
                  ) : order.status === "delivered" ? (
                    <Badge bg="primary">Delivered</Badge>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default OrderTable;
