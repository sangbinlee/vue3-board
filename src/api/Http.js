import axios from "axios";
import init from "./init";



// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });









export class Http {
  constructor( init ) {    
    this.defaultInit()    
    let service = axios.create({
    //   headers: init.customHeaders,
    //   params: init.customParams,
    //   baseURL: init.baseURL,  
    //   withCredentials: init.withCredentials,
        // baseURL: 'https://some-domain.com/api/',
        baseURL: 'https://jsonplaceholder.typicode.com/',
        timeout: 1000,
        headers: {'X-Custom-Header': 'foobar'},
    });    
    service.interceptors.response.use(init.handleSuccess, init.handleError);
    this.service = service;    
  }
  
  defaultInit () {
    init.customHeaders !== undefined ? init.customHeaders : {}
    init.customParams !== undefined ? init.customParams : {}
    init.baseURL !== undefined ? init.baseURL : "http://localhost"
    init.withCredentials !== undefined ? init.withCredentials : false
    init.handleSuccess !== undefined ? init.handleSuccess : this.defaultHandleSuccess
    init.handleError !== undefined ? init.handleError : this.defaultHandleError  
  }
  
  defaultHandleSuccess(response) { return response; }
  
  defaultHandleError(error) { return error; }

  get(path) {
    return this.service.request({
      method: "GET",
      url: path,
      responseType: "json"
    });
  }

  patch(path, payload) {
    return this.service.request({
      method: "PATCH",
      url: path,
      responseType: "json",
      data: payload
    });
  }

  post(path, bodyPayload = false) {
    return this.service.request({
      method: "POST",
      url: path,
      responseType: "json",
      data: bodyPayload
    });
  }

  delete(path, bodyPayload = false) {
    return this.service.request({
      method: "DELETE",
      url: path,
      responseType: "json",
      data: bodyPayload
    });
  }
}

export default new Http( init );