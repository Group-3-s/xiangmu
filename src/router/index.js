import { createWebHistory, createRouter } from "vue-router";
import routes from "./router";

const router = createRouter({
  routes,
  history: createWebHistory(),
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
  next();
});

export default router;
