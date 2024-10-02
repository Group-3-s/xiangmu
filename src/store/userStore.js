/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { defineStore } from "pinia";
import to from "await-to-js";
// eslint-disable-next-line import/no-cycle
import { loginByPhone } from "@/api";
import router from "@/router";

export const useUserStore = defineStore("user", {
  state() {
    return {
      userInfo: null,
    };
  },
  getters: {
    cookie(state) {
      const cookie = state.userInfo?.cookie;
      return cookie;
    },
  },
  actions: {
    async userLogin(data) {
      const [err, res] = await to(loginByPhone(data));
      if (res) {
        this.userInfo = res.data;
        router.replace("/home");
      }
    },
  },
  persist: true,
});
