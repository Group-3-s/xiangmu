/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-unused-vars */
import to from "await-to-js";
// eslint-disable-next-line import/no-cycle, import/no-named-as-default
import request from "./request";

export const getHomePageData = async () => {
  const [error, res] = await to(request.get("/homepage/block/page"));
  if (error) return console.log("请求出错！");
  return res.data.data.blocks;
};
export const getHomePageMenu = () => request.get("/homepage/dragon/ball");
export const loginByPhone = (data) => request.post("/login/cellphone", data);
export const sendValidCode = (data) => request.post("/captcha/sent", data);
export const UserInfo = (id) =>
  request.get(`/user/detail?uid=${"3277116167"}`);

export const getPlaylistSong = () =>
  request.get("/playlist/detail?id=8725882112");
export const getPlaylistSub = () =>
  request.get("/playlist/subscribers?id=8725882112&limit=30");
export const getPlaylisttop = () => request.get("/top/playlist");

export const MvRanking = (data) =>
  request.post(`/top/mv?limit=${50}&&area=${data}`, data); 
