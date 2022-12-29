import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import storage from "../utils/storage";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  setUser,
  setUserType,
  setAuthenticated,
} from "../store/auth/authSlice";
import jwt_decode from "jwt-decode";

const INITIAL_LOGIN_DATA = {
  email: "",
  password: "",
};

const Login = () => {
  const baseURL = process.env.REACT_APP_SERVICE_URL;
  const [data, setData] = useState(INITIAL_LOGIN_DATA);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    axios
      .post(`${baseURL}/accounts/login/`, data)
      .then((res) => {
        if (res.status === 200) {
          storage.set("authTokens", res.data);
          const user = jwt_decode(res.data.access);
          dispatch(setUser(user.user_id));
          dispatch(setUserType(user.user_type));
          dispatch(setAuthenticated(true));
          navigate("/home");
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const userData = (e) => {
    const userdata = { ...data };
    userdata[e.currentTarget.name] = e.currentTarget.value;
    setData(userdata);
    // setError("");
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    onChange={userData}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    onChange={userData}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Login
                </button>
              </form>
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
