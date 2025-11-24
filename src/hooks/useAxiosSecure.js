import { useEffect } from "react";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
  timeout: 5000,
});

const useAxiosSecure = () => {
  const { getToken } = useAuth();

  useEffect(() => {
    const addInterceptor = () => {
      const interceptor = instance.interceptors.request.use(async (config) => {
        const sessionToken = await getToken();
        config.headers.authorization = `Bearer ${sessionToken}`;
        return config;
      });
      return interceptor;
    };

    const interceptor = addInterceptor();

    return () => {
      instance.interceptors.request.eject(interceptor);
    };
  }, [getToken]);

  return instance;
};

export default useAxiosSecure;
