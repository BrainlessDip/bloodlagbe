import axios from "axios";

const instance = axios.create({
  baseURL: process.env.BACKEND_API,
  timeout: 5000,
});

const useAxios = () => {
  return instance;
};

export default useAxios;
