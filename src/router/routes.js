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
    name: "loginprompt",
    component: () => import("@/views/Login/loginPrompt.vue"),
  },
  {
    path: "/loginpsd",
    name: "loginpsd",
    component: () => import("@/views/Login/loginPassword.vue"),
  },
  // {path :"/logincaptcha",
  //   component:loginCaptcha

  // }
  {
    path: "/logincode",
    name: "logincode",
    component: () => import("@/views/Login/loginCode.vue"),
  },
];

export default routes;
