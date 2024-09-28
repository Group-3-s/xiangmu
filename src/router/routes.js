import MvRanking from "@/views/TabBar/ranking/MvRanking.vue";
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
    component: () => import("@/views/HomPage.vue"),
  },
  {
    path: "/mvranking",
    component: MvRanking,
  },
  {
    path: "/playlistsong",
    component: PlaylistSong,
  },
  {
    path: "/playlistcoll",
    component: PlaylistColl,
  },
];

export default routes;
