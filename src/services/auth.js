import axiosInstance from "../utils/axiosInstance";

export const handleSignin = async (userData) => {
  return await axiosInstance.post("accounts/login/", userData);
};
