import React from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

function AddCategory() {
    return (
        <Row className='my-5'>
            <Col className='col-md-6 m-auto'>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Add Category</Label>
                        <Input type="text" name="category" id="exampleCategory" placeholder="Add a category" />
                    </FormGroup>
                    <Button color="primary">Add</Button>{' '}
                </Form>
            </Col>
        </Row >
    );
}

export default AddCategory;