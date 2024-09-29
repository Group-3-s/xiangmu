/* eslint-disable no-param-reassign */
import axios from "axios";
// eslint-disable-next-line import/no-cycle
import localforage from "localforage";

const http = axios.create({
  baseURL:"https://netease-serve-kk36.vercel.app/",
});
// 配置请求拦截器(回调函数)
// 在服务器还没有接收到数据之前 拦截器先拿到
// 只有通过拦截器后 请求才得以发送出去
http.interceptors.request.use(async (config) => {
  const userInfo = await localforage.getItem("userInfo");
  const exParams = {};
  if (userInfo?.cookie) {
    exParams.cookie = userInfo.cookie;
  }
  config.params = Object.assign(config.params || {}, exParams);
  return config;
});
// 配置响应拦截器(回调函数)
// 在开发者还没有拿到响应式数据前 拦截器先拿到
// 只有通过拦截器 响应才能获得
http.interceptors.response.use((response) => response);
export default http;

