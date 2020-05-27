import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:8080" });
instance.defaults.timeout = 2500;
instance.defaults.headers = {'Content-Type':'application/json'};

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log(config)
    const headers= {...config.headers};
    headers["Content-Type"]="application/json";
    config.headers = headers;
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('response ', response)
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('error',error);
    return Promise.reject(error);
  });

export default instance;
