import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Table } from "reactstrap";

const Buyers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Col className="col-md-8">
      <span className="text-left mr-0">
        <Link to="/food/category/create">
          <Button>Create New Buyer</Button>
        </Link>
      </span>
      <h1 className="mb-3 text-center mt-10">
        <u>All Buyers</u>
      </h1>
      <Table borderless hover striped responsive>
        <thead>
          <tr>
            <th style={{ width: "3vw" }}>#</th>
            <th style={{ width: "10vw" }}>Image</th>
            <th style={{ width: "20vw" }}>Email</th>
            <th style={{ width: "15.5vw" }}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Button color="success">Edit</Button>
              &nbsp;
              <Button color="warning">Disable</Button>
              &nbsp;
              <Button color="danger">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Col>
  );
};

export default Buyers;
