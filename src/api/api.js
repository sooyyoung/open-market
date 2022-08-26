import axios from "axios";

const API = axios.create({
  baseURL: "https://openmarket.weniv.co.kr",
});

export default API;
