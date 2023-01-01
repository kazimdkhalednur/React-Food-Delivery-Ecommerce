import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Col, Row } from "reactstrap";
import AllOrders from "./AllOrders";
import AllFoods from "./AllFoods";
import PendingOrderTable from "./PendingOrderTable";
import AllCategories from "./AllCategories";
import storage from "../../utils/storage";

const Admin = ({ navlink }) => {
  const [orderStatus, setOrderStatus] = useState("pendingorder");
  const msg = storage.get("message");
  const [message, setMessage] = useState(msg);

  useEffect(() => {
    if (message) {
      storage.remove("message");
    }
  }, [message]);
  return (
    <Row className="my-3">
      {message ? (
        <Alert className="text-center" color="primary">
          {message}
        </Alert>
      ) : undefined}
      <Col className="col-md-2" style={styles.col}>
        <div>
          <ul style={styles.ul}>
            <li>
              <Link
                to="/seller"
                style={styles.link}
                onClick={() => setOrderStatus("pendingorder")}
              >
                Pending Orders
              </Link>
            </li>
            <li style={styles.li}>
              <Link
                to="/seller"
                style={styles.link}
                onClick={() => setOrderStatus("allorders")}
              >
                All Orders
              </Link>
            </li>
            <li style={styles.li}>
              <Link
                to="/seller"
                style={styles.link}
                onClick={() => setOrderStatus("allfoods")}
              >
                All Foods
              </Link>
            </li>
            <li style={styles.li}>
              <Link
                to="/seller"
                style={styles.link}
                onClick={() => setOrderStatus("allcategories")}
              >
                All Categories
              </Link>
            </li>
          </ul>
        </div>
      </Col>
      {orderStatus === "pendingorder" ? (
        <PendingOrderTable />
      ) : orderStatus === "allorders" ? (
        <AllOrders />
      ) : orderStatus === "allfoods" ? (
        <AllFoods />
      ) : orderStatus === "allcategories" ? (
        <AllCategories />
      ) : (
        ""
      )}
    </Row>
  );
};

export default Admin;

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
  },
};
