const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    // 按需引用 首页
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/mvranking",
    name: "mvranking",
    component: () => import("@/views/TabBar/ranking/MvRanking.vue"),
  },
  {
    path: "/PlaylistSong",
    name: "PlaylistSong",
    component: () => import("@/views/PlaylistDetails/PlaylistSong.vue"),
  },
  {
    path: "/playlistcoll",
    name: "playlistcoll",
    component: () => import("@/views/PlaylistDetails/PlaylistColl.vue"),
  },
  {
    path: "/loginprompt",
    component: () => import("@/views/Login/loginPrompt.vue"),
  },
  {
    path: "/loginpsd",
    name: "loginpsd",
    component: () => import("@/views/Login/loginPassword.vue"),
  },
  // {path :"/logincaptcha",
  //   component:loginCaptcha
  {
    path: "/user",
    component: () => import("@/views/user/UserInfo.vue"),
  },
  {
    path: "/userfollows",
    component: () => import("@/views/user/UserFollows.vue"),
  },
  // }
  {
    path: "/logincode",
    name: "logincode",
    component: () => import("@/views/Login/loginCode.vue"),
  },
  {
    path: "/palyer",
    name: "palyer",
    component: () => import("@/views/player/player.vue"),
  },
  {
    path: "/playerfab",
    name: "playerfab",
    component: () => import("@/views/player/playerfab.vue"),
  },
  // 歌单评论
  {
    path: "/playlistcomment",
    component: () => import("@/views/PlaylistDetails/PlaylistComment.vue"),
  },
  // Mv播放器
  {
    path: "/mvvideo",
    component: () => import("@/views/TabBar/ranking/MvVideo.vue"),
  },
];

export default routes;
