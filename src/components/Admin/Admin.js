import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Col, Row } from "reactstrap";
import AllOrders from "./Order/AllOrders";
import AllFoods from "./Food/AllFoods";
import PendingOrderTable from "./Order/PendingOrderTable";
import AllCategories from "./Category/AllCategories";
import storage from "../../utils/storage";

const Admin = ({ navlink }) => {
  const [navLink, setNavLink] = useState(navlink);
  const [isAlertVisible, setIsAlertVisible] = useState(true);
  const msg = storage.get("message");
  const [message, setMessage] = useState(msg);

  useEffect(() => {
    setTimeout(() => {
      setIsAlertVisible(false);
      storage.remove("message");
    }, 3000);
  }, [message]);
  return (
    <Row className="my-3">
      {message && isAlertVisible ? (
        <Alert className="text-center" color="primary">
          {message}
        </Alert>
      ) : undefined}
      <Col className="col-md-2" style={styles.col}>
        <div>
          <ul style={styles.ul}>
          <li>
              <Link
                to="/pending-order"
                style={styles.link}
                onClick={() => setNavLink("pendingorder")}
              >
                Revenew
              </Link>
            </li>
            <li>
              <Link
                to="/pending-order"
                style={styles.link}
                onClick={() => setNavLink("pendingorder")}
              >
                Pending Orders
              </Link>
            </li>
            <li style={styles.li}>
              <Link
                to="/all-orders"
                style={styles.link}
                onClick={() => setNavLink("allorders")}
              >
                All Orders
              </Link>
            </li>
            <li style={styles.li}>
              <Link
                to="/all-foods"
                style={styles.link}
                onClick={() => setNavLink("allfoods")}
              >
                All Foods
              </Link>
            </li>
            <li style={styles.li}>
              <Link
                to="/all-categories"
                style={styles.link}
                onClick={() => setNavLink("allcategories")}
              >
                All Categories
              </Link>
            </li>
          </ul>
        </div>
      </Col>
      {navLink === "pendingorder" ? (
        <PendingOrderTable />
      ) : navLink === "allorders" ? (
        <AllOrders />
      ) : navLink === "allfoods" ? (
        <AllFoods />
      ) : navLink === "allcategories" ? (
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
