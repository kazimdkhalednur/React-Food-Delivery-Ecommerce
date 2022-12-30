import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Table } from 'reactstrap';
import AdminOrderTable2 from './AdminOrderTable2';
import AdminOrderTable3 from './AdminOrderTable3';

// Ei Page e Current Orders er List Mapping


function AdminOrderTable() {
    const [orderStatus, setOrderStatus] = useState('current');
    return (
        <Row className='my-3'>
            <Col className='col-md-2' style={styles.col}>
                <div>
                    <ul style={styles.ul}>
                        <li>
                            <Link to="/AdminOrderTable" style={styles.link} onClick={() => setOrderStatus('current')}>Current Orders</Link>
                        </li>
                        <li style={styles.li}>
                            <Link to="/AdminOrderTable" style={styles.link} onClick={() => setOrderStatus('allorder')}>All Orders</Link>
                        </li>
                    </ul>
                </div>
            </Col>
            {/* {x == y ? <AdminOrderTable2 /> : <AdminOrderTable3 />} */}
            {orderStatus === 'current' ? <AdminOrderTable3 /> : <AdminOrderTable2 />}
        </Row>
    );
}



export default AdminOrderTable;

const styles = {
    col: {
        marginLeft: "100px",
        active: "false",
    },
    ul: {
        listStyle: "none",
        padding: "15px",
        backgroundColor: "#eee",
        minHeight: "400px",
        borderRadius: "8px",
    },
    link: {
        textDecoration: "none",
        fontSize: "18px",
        fontWeight: "600",
        padding: "15px",
        margin: "5px 0",
        display: "inline-block",
        borderRadius: "4px",
        backgroundColor: "#ccc",
        width: "100%",
    }
}