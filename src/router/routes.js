import loginPrompt from "@/views/Login/loginPrompt.vue";
import loginPhone from "@/views/Login/loginPhone.vue";
import loginPassword from "@/views/Login/loginPassword.vue";
// import loginCaptcha from "@/views/Login/loginCaptcha.vue";
import loginCode from "@/views/Login/loginCode.vue";

export default [
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
];
