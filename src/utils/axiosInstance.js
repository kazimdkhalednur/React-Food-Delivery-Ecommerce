import axios from "axios";
import storage from "./storage";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";

const baseURL = process.env.REACT_APP_SERVICE_URL;

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(async (req) => {
  let authTokens = storage.get("authTokens");
  let bool = false;
  if (authTokens) {
    axios
      .post(`${baseURL}/accounts/token/verify/`, { token: authTokens.refresh })
      .then((res) => {
        if (res.status === 200) {
          bool = true;
        }
      })
      .catch((e) => {});
  }
  if (bool) {
    req.headers.authorization = `Bearer ${authTokens?.access}`;
    const user = jwt_decode(authTokens?.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    if (!isExpired) return req;
    const response = await axios.post(`${baseURL}/accounts/token/refresh/`, {
      refresh: authTokens?.refresh,
    });
    storage.set("authTokens", response.data);
    req.headers.Authorization = `Bearer ${response.data.access}`;
  }

  return req;
});

export default axiosInstance;
