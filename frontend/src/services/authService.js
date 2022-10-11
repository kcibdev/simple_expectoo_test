import axios from "axios";
import { LOGIN_URI, REGISTER_URI } from "../utils/constants";

//I created it to be like this beacuse since you wanted to a simple application, so i didn't use redux
//or any other state management library but in a real world application, i would use redux or any other state management library
//to manage the state of the application

const loginUser = async (userInfo) => {
  const res = await axios.post(LOGIN_URI, userInfo);
  console.log(res);
  if (res.data && res.data.success) {
    //set to local storage or any other state management library
    localStorage.setItem("user", JSON.stringify(res.data.data));
  }
  return res.data;
};

const registerUser = async (userInfo) => {
  const res = await axios.post(REGISTER_URI, userInfo);
  console.log(res);
  if (res.data && res.data.success) {
    //set to local storage or any other state management library
    localStorage.setItem("user", JSON.stringify(res.data.data));
  }
  return res.data;
};

const authService = {
  registerUser,
  loginUser,
};

export default authService;
