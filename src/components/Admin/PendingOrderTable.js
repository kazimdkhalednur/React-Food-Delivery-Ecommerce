import React, { useEffect, useState } from "react";
import { Badge, Button, Col, Table } from "reactstrap";
import axiosInstance from "../../utils/axiosInstance";

function PendingOrderTable() {
  const [orders, setOrders] = useState();
  const fetchOrders = async () => {
    const response = await axiosInstance
      .get("order/pending/list/")
      .catch((e) => {
        console.log(e.response);
      });
    setOrders(response.data);
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <Col className="col-md-8">
      <h1 className="mb-3 text-center">
        <u>Pending Order Table</u>
      </h1>
      <Table borderless hover striped responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Address</th>
            <th>Products</th>
            <th>Amount</th>
            <th>Assign</th>
          </tr>
        </thead>
        <tbody>
          {orders?.length ? (
            orders?.map((order, id) => (
              <tr key={order.id}>
                <th scope="row">{id + 1}</th>
                <td>{order.address}</td>
                <td>
                  {order.cart.map((item) => (
                    <>
                      {item.quantity} x {item.food.title}
                      <br />
                    </>
                  ))}
                </td>
                <td>৳{order.amount}</td>
                <td></td>
              </tr>
            ))
          ) : (
            <>
              <tr rowSpan="4" className="my-3">
                <td colSpan="5" className="text-center">
                  <h4>No pending order available</h4>
                </td>
              </tr>
            </>
          )}
        </tbody>
      </Table>
    </Col>
  );
}

export default PendingOrderTable;
