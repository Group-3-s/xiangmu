import MvRanking from "@/views/TabBar/ranking/MvRanking.vue";
import loginPrompt from "@/views/Login/loginPrompt.vue";
import loginPhone from "@/views/Login/loginPhone.vue";
import loginPassword from "@/views/Login/loginPassword.vue";

import loginCode from "@/views/Login/loginCode.vue";

const routes = [
  // {
  //   path: "/",
  //   redirect: "/home",
  // },
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
    path: "/loginprompt",

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
  {
    path: "/logincode",
    component: loginCode,
  },
];

export default routes;
