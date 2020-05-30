import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:8080" });
instance.defaults.timeout = 10000;
instance.defaults.headers = {'Content-Type':'application/json'};
instance.defaults.withCredentials = true;

const authHeaderName = 'authorization';
let authHeaderValue = null;

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const headers= {...config.headers};
    headers["Content-Type"]="application/json";
    if(authHeaderValue) {
      headers[authHeaderName] = authHeaderValue;
    }
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
    if(response.config.url === '/login'){
      authHeaderValue = response.headers[authHeaderName];
    }
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('error',error);
    return Promise.reject(error);
  });

export default instance;
