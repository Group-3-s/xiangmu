import UserInfo from "@/views/user/UserInfo.vue";
import MvRanking from "@/views/TabBar/ranking/MvRanking.vue";
import loginPrompt from "@/views/Login/loginPrompt.vue";
import loginPhone from "@/views/Login/loginPhone.vue";
import loginPassword from "@/views/Login/loginPassword.vue";
import loginCode from "@/views/Login/loginCode.vue";
import UserFollows from "@/views/user/UserFollows.vue";
import PlaylistSong from "@/views/PlaylistDetails/PlaylistSong.vue";
import PlaylistColl from "@/views/PlaylistDetails/PlaylistColl.vue";

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
    component: MvRanking,
  },
  {
    path: "/PlaylistSong",
    component: PlaylistSong,
  },
  {
    path: "/playlistsong",
    component: PlaylistSong,
  },
  {
    path: "/playlistcoll",
    component: PlaylistColl,
  },
  {
    path: "/loginprompt",
    // name: loginPrompt,
    component: loginPrompt,
  },
  {
    path: "/loginphone",
    component: loginPhone,
  },
  {
    path: "/loginpsd",
    component: loginPassword,
  },
  // {path :"/logincaptcha",
  //   component:loginCaptcha

  // }
  {
    path: "/logincode",
    component: loginCode,
  },
  {
    path: "/user",
    component: UserInfo
  },
  {
    path: "/userfollows",
    component: UserFollows
  }
];

export default routes;
