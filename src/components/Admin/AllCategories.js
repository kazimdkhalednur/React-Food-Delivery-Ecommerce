import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Table } from "reactstrap";
import axiosInstance from "../../utils/axiosInstance";

function AllCategories() {
  const [categories, setCategories] = useState();
  const navigate = useNavigate();
  const fetchCategories = async () => {
    const response = await axiosInstance.get("/category/").catch((e) => {
      console.log(e.response);
    });
    setCategories(response.data);
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  function hideHandler(id) {
    console.log(id);
  }

  function editHandler(id) {
    console.log(id);
    navigate(`/food/category/update/${id}`);
  }

  function deleteHandler(id) {}

  return (
    <Col className="col-md-8">
      <span className="text-left mr-0">
        <Link to="/food/category/create">
          <Button>Create New Category</Button>
        </Link>
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
                <img alt="category_image" src={item.image} />
              </td>
              <td>{item.title}</td>
              <td>
                <Button
                  onClick={() => {
                    hideHandler(item.id);
                  }}
                >
                  Hide
                </Button>
                &nbsp;
                <Button
                  color="success"
                  onClick={() => {
                    editHandler(item.id);
                  }}
                >
                  Edit
                </Button>
                &nbsp;
                <Button
                  color="danger"
                  onClick={() => {
                    deleteHandler(item.id);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Col>
  );
}

export default AllCategories;
