/* eslint-disable implicit-arrow-linebreak */
import to from "await-to-js";
import request from "./request";

export const getHomePageData = async () => {
  const [error, res] = await to(request.get("/homepage/block/page"));
  if (error) return console.log("请求出错！");
  return res.data.data.blocks;
};
export const getHomePageMenu = () => request.get("/homepage/dragon/ball");
export const loginByPhone = (data) => request.post("/login/cellphone", data);
export const sendValidCode = (data) => request.post("/captcha/sent", data);
export const getPlaylistSong = () =>
  request.get("/playlist/detail?id=8725882112");
export const getPlaylistSub = () =>
  request.get("/playlist/subscribers?id=8725882112&limit=30");
export const getPlaylisttop = () => request.get("/top/playlist");
