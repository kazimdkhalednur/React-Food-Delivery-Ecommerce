import React, { useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
const InitialValue = { full_name: "John Dev", email: "johndev@hotmail.com", address: "41 Manchester Street Saint Johns, FL 32259", image: "dg835fj8it.jpg" }


function EditProfile() {
    const [value, setValue] = useState(InitialValue);
    return (
        <Row className="my-5">
            <Col className="col-md-6 m-auto">
                <h1 className="mx-2">Update Profile</h1>
                <Form className="container-fluid my-5">
                    <FormGroup>
                        <Label for="exampleFullName">Full Name</Label>
                        <Input
                            type="text "
                            name="full_name"
                            id="exampleFullName"
                            placeholder="Full Name"
                            value={value.full_name}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input
                            type="text "
                            name="email"
                            id="exampleEmail"
                            placeholder="Email"
                            value={value.email}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleAddress">Address</Label>
                        <Input
                            type="text "
                            name="address"
                            id="exampleAddress"
                            placeholder="Address"
                            value={value.address}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">Profile Picture</Label>
                        <Input type="file" name="file" id="exampleFile" onChange={value.image} />
                    </FormGroup>
                    <Button color="primary">Update</Button>{" "}
                </Form>
            </Col>
        </Row>
    );
}

export default EditProfile;