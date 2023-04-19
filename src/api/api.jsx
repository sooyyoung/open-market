import axios from "axios";

const API = axios.create({
  baseURL: "https://openmarket.weniv.co.kr",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
