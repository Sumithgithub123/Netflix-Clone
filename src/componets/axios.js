import axios from "axios";
import { baseurl } from "../constants/constants"

const axiosinstance = axios.create({
    baseURL: baseurl
  });

  export default axiosinstance