import MvRanking from "@/views/TabBar/ranking/MvRanking.vue";
import PlaylistSong from "@/views/PlaylistDetails/PlaylistSong.vue";

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
];

export default routes;
