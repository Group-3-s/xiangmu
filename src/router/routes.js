import MvRanking from "@/views/TabBar/ranking/MvRanking.vue";

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
];

export default routes;
