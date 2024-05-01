import axios from "axios";
import type { App } from "vue";




const user_ = localStorage.getItem('user')
const user = user_ ? JSON.parse(user_) : {}
const Authorization = user_ ? 'Bearer ' + user?.accessToken : ''
console.log('test ::: user_::', user_)
console.log('test ::: user::', user)
console.log('test ::: Authorization::', Authorization)
const AUTH_TOKEN = Authorization;
// Global axios defaults
// Now all requests using this instance will wait 2.5 seconds before timing out
axios.defaults.timeout = 2500;
// axios.defaults.baseURL = "https://api.example.com";// https://jsonplaceholder.typicode.com
// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";// https://jsonplaceholder.typicode.com
axios.defaults.baseURL = "http://localhost:8080/api/v1";// https://jsonplaceholder.typicode.com
// axios.defaults.baseURL = "/api/v1";// https://jsonplaceholder.typicode.com





axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] =
  "application/json";
  // "application/x-www-form-urlencoded";

console.log("AUTH_TOKEN::", AUTH_TOKEN);

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

interface AxiosOptions {
  baseUrl?: string;
  token?: string;
}

console.log("axios", axios);

export default {
  install: (app: App, options: AxiosOptions) => {
    app.config.globalProperties.$axios = axios.create({
      baseURL: options.baseUrl,
      headers: {
        Authorization: options.token ? `Bearer ${options.token}` : "",
      },
    });
  },
};
