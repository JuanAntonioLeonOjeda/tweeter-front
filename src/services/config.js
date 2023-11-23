import axios from 'axios'

const app = axios.create({
  baseURL: "https://tweeter-rb11.onrender.com/api",
});

export default app