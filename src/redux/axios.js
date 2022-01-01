import * as axio from "axios";

const axios = axio.create({
  baseURL: "http://localhost:8080/",
});
export default axios;
