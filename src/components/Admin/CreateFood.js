// import React, { useEffect, useState } from "react";
import React from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import axiosInstance from "../../utils/axiosInstance";

const initial_values = {
  title: "",
  number: "",
  image: "",
  description: "",
};

function CreateFood() {
  let createFood = async (e) => {
    e.preventDefault();
    let response = await axiosInstance.post("", {
      category: 1,
      title: "Chicker New",
      price: 12.46,
      description: "grtwyhtjh",
    });
    console.log(response.data);
  };

  // useEffect(() => {
  //   getProducts();
  // });

  // const [value, setValue] = useState(initial_values);

  return (
    <Row className="my-5">
      <Col className="col-md-6 m-auto">
        <h1 className="mx-2">Food Create</h1>
        <Form className="container-fluid my-5" onSubmit={createFood}>
          <FormGroup>
            <Label for="exampleSelect">Category</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleTitle">Title</Label>
            <Input
              type="text "
              name="title"
              id="exampleEmail"
              placeholder="Title"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleNumber">Prize</Label>
            <Input
              type="number"
              name="number"
              id="exampleNumber"
              placeholder="Prize"
              onChange={(e) => {
                console.log(e.target.number.value);
                return e.target.number.value;
              }}
              value={initial_values.number}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input type="file" name="file" id="exampleFile" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Description</Label>
            <Input
              rows="7"
              type="textarea"
              name="description"
              id="exampleText"
            />
          </FormGroup>
          <Button color="primary">Create</Button>{" "}
        </Form>
      </Col>
    </Row>
  );
}

export default CreateFood;
