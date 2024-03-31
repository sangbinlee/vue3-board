import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from "axios";

interface Options {
  url: string;
  customHeaders?: any;
  payload?: Object;
}

const getHeaders = (customHeaders: any) => {
  return {
    headers: {
      ...customHeaders,
      Accept: "application/json",
      "Content-Type": "application/json",
      token: "test-x"
    }
  };
};

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
axios.defaults.timeout = 2500;

const requestInterceptor = (req: AxiosRequestConfig): AxiosRequestConfig => {
  console.log("request wroks");
  return req;
};

const successInterceptor = (res: AxiosResponse): AxiosResponse => {
  console.log("success wroks");
  return res;
};

const errorInterceptor = (err: AxiosError) => {
  return Promise.reject(err);
};

axios.interceptors.request.use(requestInterceptor);
axios.interceptors.response.use(
  (res) => successInterceptor(res),
  (err) => errorInterceptor(err)
);

const get = ({ url, customHeaders }: Options): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, getHeaders(customHeaders))
      .then((response: AxiosResponse) => {
        console.log("resolving data");
        resolve(response);
      })
      .catch((error: AxiosError) => {
        reject(error);
      });
  });
};

const url = "/posts";
const api1 = get({ url });
console.log("api1:", api1);

// const testHeader = {
//   tempToken: "test-y"
// };

// const api2 = get({ url, customHeaders: testHeader });

// const api3 = get({ url });
