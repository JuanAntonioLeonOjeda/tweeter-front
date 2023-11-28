import axios from "axios";

const jsonpl = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts"
});

export default jsonpl;
