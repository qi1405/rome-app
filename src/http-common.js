import axios from "axios";
export default axios.create({
  // baseURL: "http://localhost:8080/api",
  baseURL: "https://romedical.herokuapp.com/",
  headers: {
    "Content-type": "application/json"
  }
});