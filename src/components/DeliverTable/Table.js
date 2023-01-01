import React from "react";
import { Col } from "reactstrap";

const Table = () => {
  return (
    <Col className="col-md-8">
      <h1 className="mb-3 text-center mt-10">
        <u>Order Table</u>
      </h1>
      <Table borderless hover striped responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Order ID</th>
            <th>Address</th>
            <th>status</th>
          </tr>
        </thead>
      </Table>
    </Col>
  );
};

export default Table;
