/* eslint-disable implicit-arrow-linebreak */
import to from "await-to-js";
// eslint-disable-next-line import/no-cycle
import request from "./request";

export const getHomePageData = async () => {
  const [error, res] = await to(request.get("/homepage/block/page"));
  if (error) return console.log("请求出错！");
  return res.data.data.blocks;
};
export const getHomePageMenu = () => request.get("/homepage/dragon/ball");
// 登录
export const loginByPhone = (data) => request.post("/login/cellphone", data);
// 接收验证码api
export const sendValidCode = (data) => request.post("/captcha/sent", data);
// 二维码
// export const sendCodekey = (data) =>
//   request.post(`/login/qr/key?timestamp=${Date.now()}&noCookie=true`, data);
// export const sendCodecreate = (data) =>
//   request.post(`/login/qr/create?qrimg=true&timestamp=${Date.now()} `, data);

// export const sendCodecheck = (data) => {
//   console.log(data);
//   // 把一个地址当做参数给传递过去了 会报错：参数错误
//   return request.post(
//     `/login/qr/check?timestamp=${Date.now()}&noCookie=true`,
//     data
//   );
// };

export const getPlaylistSong = () =>
  request.get("/playlist/detail?id=8725882112");
export const getPlaylistSub = () =>
  request.get("/playlist/subscribers?id=8725882112&limit=30");
export const getPlaylisttop = () => request.get("/top/playlist");

export const MvRanking = (data) =>
  request.post(`/top/mv?limit=${50}&&area=${data}`, data);
