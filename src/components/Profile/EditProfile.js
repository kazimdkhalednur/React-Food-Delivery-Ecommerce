import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import axiosInstance from "../../utils/axiosInstance";

function EditProfile() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [image, setImage] = useState();
  const getUserData = async () => {
    let response = await axiosInstance.get("/accounts/detail/");
    setFullName(response.data.full_name);
    setEmail(response.data.email);
    setAddress(response.data.address);
    setPhone(response.data.phone);
    setImage(response.data.img);
  };

  useEffect(() => {
    getUserData();
  }, []);

  let form_data = new FormData();
  form_data.append("img", image);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(form_data);
    await axiosInstance
      .put("/accounts/detail/", {
        full_name: fullName,
        email: email,
        address: address,
        phone: phone,
        img: form_data.img,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("/profile");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Row className="my-5">
      <Col className="col-md-6 m-auto">
        <h1 className="mx-2">Update Profile</h1>
        <Form
          className="container-fluid my-5"
          onSubmit={submitHandler}
          encType="multipart/form-data"
        >
          <FormGroup>
            <Label for="exampleFullName">Full Name</Label>
            <Input
              type="text "
              name="full_name"
              id="exampleFullName"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="text "
              name="email"
              id="exampleEmail"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress">Address</Label>
            <Input
              type="text"
              name="address"
              id="exampleAddress"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePhone">Phone Number</Label>
            <Input
              type="text"
              name="phone"
              id="examplePhone"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">Profile Picture</Label>
            <Input
              type="file"
              name="file"
              id="exampleFile"
              onChange={(e) => setImage(e.target.value)}
            />
          </FormGroup>
          <Button color="primary">Update</Button>{" "}
        </Form>
      </Col>
    </Row>
  );
}

export default EditProfile;
