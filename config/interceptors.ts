import { DataInstance } from "./config";

DataInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {    
    alert(error.message);
    return Promise.reject(error);
  }
);

DataInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {    
    alert(error.message);
    return Promise.reject(error);
  }
);
