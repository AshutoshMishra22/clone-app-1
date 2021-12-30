import * as axio from "axios";

const axios = axio.create({
  baseURL: "https://clone-app-node-1.herokuapp.com/",
});
export default axios;
