import { createWebHistory, createRouter } from "vue-router";
import routes from "./routes";
// import localforage from "localforage";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // if (!to.fullPath.startsWith("/loginpsd")) {
  //   localforage
  //     .getItem("userInfo")
  //     .then((cookie) => {
  //       if (cookie) {
  //         next();
  //       } else {
  //         next(`/loginpsd?originPath=${to.fullPath}`);
  //       }
  //     })
  //     .catch(() => {
  //       next(`/loginpsd?originPath=${to.fullPath}`);
  //     });
  // } else {
  //   next();
  // }
  next();
});

export default router;
