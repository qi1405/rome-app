import axios from "axios";
export default axios.create({
  // baseURL: "http://localhost:8080/api",
  baseURL: "https://romedical.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});