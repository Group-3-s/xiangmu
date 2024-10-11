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
// 手机号登录
export const loginByPhone = (data) => request.post("/login/cellphone", data);
// 验证码登录
export const sendValidCode = (data) => request.post("/captcha/sent", data);
// 推荐歌单界面
export const getPlaylistSong = (id) =>
  request.get("/playlist/detail", { params: { id } });
// 推荐歌单界面收藏（收藏者api）
// 歌单详情
// export const getPlaylistSong = (data) => request.post("/playlist/detail", data);

export const getPlaylistSub = (id) =>
  request.get("/playlist/subscribers?limit=30", { params: { id } });

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
// 推荐歌单界面最下边（最后你可能喜欢）
export const getPlaylisttop = () => request.get("/top/playlist");
// 用户列表
export const UserInfo = (id) => request.get(`/user/detail?uid=${"3277116167"}`);
// 用户关注
export const UserInfo1 = (id) =>
  request.get(`/user/follows?uid=${"3277116167"}`);

// 歌单评论
export const getPlaylistComment = (data) =>
  request.get(`/comment/playlist?id=${705123491}&&limit=${20}`, data);
