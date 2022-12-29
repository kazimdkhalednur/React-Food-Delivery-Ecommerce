import React from 'react';
import { Badge, Col, Row, Table } from 'reactstrap';

function AdminOrderTable() {
    return (
        <Row className='my-3'>
            <Col className='col-md-8 m-auto'>
                <h1 className='mb-3 mt-5'>Order Table</h1>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Product Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>
                                <Badge bg="success">
                                    Delivered
                                </Badge>{' '}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>
                                <Badge bg="danger">
                                    Pending
                                </Badge>{' '}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>
                                <Badge bg="success">
                                    Delivered
                                </Badge>{' '}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
}

export default AdminOrderTable;