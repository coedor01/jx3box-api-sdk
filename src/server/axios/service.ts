import axios from 'axios';

export default function createService(baseURL: string) {
  // axios拦截器
  const service = axios.create({
    baseURL, // 开发服务器接口
    timeout: 60000, // request timeout
  });

  // 请求拦截器
  service.interceptors.request.use(
    config => config,
    (error) => {
      console.log(error); // for debug
      return Promise.reject(error);
    }
  );

  // 响应拦截器
  service.interceptors.response.use(
    response => response,
    (error) => {
      console.log(error); // for debug
      return Promise.reject(error);
    }
  );

  return service;
}