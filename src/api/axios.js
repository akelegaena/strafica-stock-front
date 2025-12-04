import axios from "axios";

/*export default axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});
*/


axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

export default axios;

