import axios from "axios";
import { login } from "../utilities/auth";
const api = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (e) => {
    console.log(e.response);
    if (e.response.status === 401) {
      login();
    }
  }
);
export default api;

