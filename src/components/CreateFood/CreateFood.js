import React from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

function CreateFood() {
    return (
        <Row className='my-5'>
            <Col className='col-md-6 m-auto'>
                <h1 className='mx-2'>Food Create</h1>
                <Form className='container-fluid my-5'>
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
                        <Input type="text " name="title" id="exampleEmail" placeholder="Title" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleNumber">Prize</Label>
                        <Input type="number" name="number" id="exampleNumber" placeholder="Prize" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input type="file" name="file" id="exampleFile" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Description</Label>
                        <Input rows="7" type="textarea" name="description" id="exampleText" />
                    </FormGroup>
                    <Button color="primary">Create</Button>{' '}
                </Form>
            </Col>
        </Row>
    )
}

export default CreateFood;