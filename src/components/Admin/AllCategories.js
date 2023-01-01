import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Table } from "reactstrap";
import axiosInstance from "../../utils/axiosInstance";

function AllCategories() {
  const [categories, setCategories] = useState();
  const fetchCategories = async () => {
    const response = await axiosInstance.get("/category/").catch((e) => {
      console.log(e.response);
    });
    setCategories(response.data);
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <Col className="col-md-8">
      <span className="text-left mr-0">
        <Button>Create New Category</Button>
      </span>
      <h1 className="mb-3 text-center mt-10">
        <u>All Categories</u>
      </h1>
      <Table borderless hover striped responsive>
        <thead>
          <tr>
            <th style={{ width: "3vw" }}>#</th>
            <th style={{ width: "10vw" }}>Image</th>
            <th style={{ width: "20vw" }}>Title</th>
            <th style={{ width: "15.5vw" }}></th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((item, id) => (
            <tr>
              <td>{id}</td>
              <td>
                <img alt="product_image" src={item.image} />
              </td>
              <td>{item.title}</td>
              <td>
                <Button>Hide</Button>
                &nbsp;
                <Button color="success">Edit</Button>
                &nbsp;
                <Button color="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Col>
  );
}

export default AllCategories;
