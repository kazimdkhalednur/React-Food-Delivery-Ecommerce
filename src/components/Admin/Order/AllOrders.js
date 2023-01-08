import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Col, Table } from "reactstrap";
import axiosInstance from "../../../utils/axiosInstance";

function AllOrders() {
  const [orders, setOrders] = useState();
  const fetchOrders = async () => {
    const response = await axiosInstance
      .get("order/seller/list/")
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
        <u>Order Table</u>
      </h1>
      <Table borderless hover striped responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Address</th>
            <th>Products</th>
            <th>Amount</th>
            <th className="text-center">Status</th>
            <th></th>
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
                <td className="text-center">
                  {order.status === "paid" ? (
                    <h5>
                      <Badge color="success">Paid</Badge>
                    </h5>
                  ) : order.status === "on_the_way" ? (
                    <h5>
                      <Badge color="warning">On the way</Badge>
                    </h5>
                  ) : order.status === "delivered" ? (
                    <h5>
                      <Badge color="primary">Delivered</Badge>
                    </h5>
                  ) : (
                    ""
                  )}
                </td>
                <td>
                  <Button color="success">
                    <Link to={`/food/update/${order.id}`}>EDIT</Link>
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <>
              <tr rowSpan="4" className="my-3">
                <td colSpan="5" className="text-center">
                  <h4>No order available</h4>
                </td>
              </tr>
            </>
          )}
        </tbody>
      </Table>
    </Col>
  );
}

export default AllOrders;
