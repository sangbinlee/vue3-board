import axios, { type AxiosInstance } from "axios";

// let user = JSON.parse(localStorage.getItem('user'));
// let Authorization = 'Bearer ' + user ? user.accessToken : ''
// console.log('test ::: user', user)
// console.log('test ::: Authorization', Authorization)
const apiClient: AxiosInstance = axios.create({
  // baseURL: "http://localhost:8080/api/v1",
  headers: {
    "Content-type": "application/json",
    // "Authorization": Authorization,
  },
});

export default apiClient;