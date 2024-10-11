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
export const loginByPhone = (data) => request.post("/login/cellphone", data);
export const sendValidCode = (data) => request.post("/captcha/sent", data);
export const getPlaylistSong = (id) =>
  request.get("/playlist/detail", { params: { id } });
export const getPlaylistSub = (id) =>
  request.get("/playlist/subscribers?limit=30", { params: { id } });
//
export const getPlaylisttop = () => request.get("/top/playlist");
// 获取MV排行榜
export const MvRanking = (data) =>
  request.post(`/top/mv?limit=${50}&&area=${data}`, data);
// 歌曲播放url
export const Song = (data) => request.get(`/song/url?id=${data}`, data);
// 判断歌曲是否能够播放
export const SongPermissions = (data) =>
  request.get(`/check/music?id=${data}`, data);
// 歌曲详细
export const SongDelailed = (data) =>
  request.get(`/song/detail?ids=${data}`, data);
