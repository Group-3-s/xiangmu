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
];

export default routes;
