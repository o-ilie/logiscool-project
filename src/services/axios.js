import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  "Content-Type": "application/json",
  credentials: true,
});

export default Axios;
