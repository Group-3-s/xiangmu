import UserInfo from "@/views/user/UserInfo.vue";
import MvRanking from "@/views/TabBar/ranking/MvRanking.vue";
import loginPrompt from "@/views/login/loginPrompt.vue";
import loginPhone from "@/views/login/loginPhone.vue";
import loginPassword from "@/views/login/loginPassword.vue";
import loginCode from "@/views/login/loginCaptcha.vue";
import UserFollows from "@/views/user/UserFollows.vue";

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
    path: "/loginprompt",
    // name: loginPrompt,
    component: loginPrompt,

    // children: {
    //   path: "/loginphone",
    //   // name: loginPhone,
    //   component: loginPhone,
    // },
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
    path:"/userfollows",
    component:UserFollows
  }
];

export default routes;
