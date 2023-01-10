import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Table } from "reactstrap";
import axiosInstance from "../../../utils/axiosInstance";

function AllOrder() {
  const [foods, setFoods] = useState();
  const fetchFoods = async () => {
    const response = await axiosInstance.get("/seller/").catch((e) => {
      console.log(e.response);
    });
    setFoods(response.data);
  };
  useEffect(() => {
    fetchFoods();
    window.scrollTo(0, 0);
  }, []);

  const foodStatus = async (item) => {
    await axiosInstance
      .get(`seller/food/status/${item.id}/`)
      .then((res) => {
        document.querySelector(`#status-${item.id}`).innerHTML = res.data.msg;
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  return (
    <Col className="col-md-8">
      {/* <Alert color="success">Order placed successfully</Alert> */}
      <span className="text-left mr-0">
        <Link to="/food/create">
          <Button>Create New Food</Button>
        </Link>
      </span>
      <h1 className="mb-3 text-center mt-10">
        <u>All Foods</u>
      </h1>
      <Table borderless hover striped responsive>
        <thead>
          <tr>
            <th style={{ width: "2.5vw" }}>#</th>
            <th style={{ width: "12vw" }}>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th style={{ width: "17vw" }}></th>
          </tr>
        </thead>
        <tbody>
          {foods?.map((item, id) => (
            <tr
              style={{
                lineHeight: "15vh",
              }}
            >
              <td>{id + 1}</td>
              <td>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    position: "absolute",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                      margin: "auto",
                    }}
                    alt="product_image"
                    src={item.image}
                  />
                </div>
              </td>
              <td>
                <Link to={`/foods/${item.id}`}>{item.title}</Link>
              </td>
              <td>৳{item.price}</td>
              <td>
                <Button
                  id={`status-${item.id}`}
                  onClick={() => {
                    foodStatus(item);
                  }}
                >
                  {item.is_visible ? "Hide" : "Public"}
                </Button>
                &nbsp;
                <Button color="success">
                  <Link to={`/food/update/${item.id}`}>Edit</Link>
                </Button>
                &nbsp;
                <Button color="danger">
                  <Link to={`/food/delete/${item.id}`}>Delete</Link>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Col>
  );
}

export default AllOrder;
