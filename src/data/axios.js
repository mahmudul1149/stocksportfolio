import axios from "axios";

const instance = axios.create({
  baseURL: "https://http-vue-31e98-default-rtdb.firebaseio.com/",
});
export default instance;
