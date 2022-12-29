import storage from "../utils/storage";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  setAuthenticated,
  setUser,
  setUserType,
} from "../store/auth/authSlice";

const baseURL = process.env.REACT_APP_SERVICE_URL;

const CheckAuthenticated = () => {
  const data = storage.get("authTokens");
  const dispatch = useDispatch();
  if (data) {
    axios
      .post(`${baseURL}/accounts/token/verify/`, { token: data.refresh })
      .then((res) => {
        if (res.status === 200) {
          const user = jwt_decode(data.access);
          dispatch(setUser(user.user_id));
          dispatch(setUserType(user.user_type));
          dispatch(setAuthenticated(true));
        }
      })
      .catch((e) => {
        if (e.response.status === 401) {
          storage.remove("authTokens");
          dispatch(setAuthenticated(false));
        }
      });
  }
  return;
};
export default CheckAuthenticated;
