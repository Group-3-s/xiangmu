<template>
  <div>
    <!-- 返回 -->
    <div class="w-[100vw] h-[8vw] mt-[4vw]">
      <goBack></goBack>
      <h3 class="mt-[-8vw] ml-[14vw] text-xl">手机登录</h3>
    </div>
    <br />

    <!-- 提示 -->
    <div class="w-[100vw] h-[14vw] text-[#b9b9b9] ml-[5vw] mt-[10vw] text-xl">
      未创建手机号登录后自动创建账号
    </div>
    <!-- phone -->
    <Myinput
      placeholder="请输入手机号"
      :value="userInfo.phone"
      @update:value="(e) => (userInfo.phone = e)"
      class="px-[10px] mt-[10px]"
    />

    <br />
    <!-- psd-->
    <Myinput
      placeholder="请输入密码"
      type="password"
      :value="userInfo.password"
      @update:value="(e) => (userInfo.password = e)"
      class="px-[10px] mt-[10px]"
    />
    <br />
    <Myinput
      placeholder="请输入验证码"
      :value="userInfo.captcha"
      @update:value="(e) => (userInfo.captcha = e)"
      class="ml-[3vw]"
    />
    <van-button
      @click="sendCode"
      :loading="loading"
      type="success"
      loading-text="发送中"
      >发送验证码</van-button
    >
    <van-button
      round
      color="#fff9f7"
      type="primary"
      plain
      @click="userStore.userLogin(userInfo)"
      class="w-[70vw] h-[12vw] btn"
      >登录</van-button
    >
  </div>
</template>
<script setup>
import goBack from "@/components/goBack.vue";
import Myinput from "@/components/Myinput.vue";
import { useRoute, useRouter } from "vue-router";
import { sendValidCode } from "@/api";
import { useRequest } from "vue-request";
import { useUserStore } from "@/store";

import { ref, watch, watchEffect } from "vue";
const route = useRoute();
const router = useRouter();
const userInfo = ref({
  phone: "",
  password: "",
  captcha: "",
});
// const keyword = route.query.keyword;
// console.log(keyword);
// const sendCode = () => {
//   sendValidCode({ phone: route.query.keyword })
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// 发送验证码
const {
  run: sendCode,
  data: result,
  loading,
} = useRequest(() => {
  sendValidCode({ phone: userInfo.value.phone }),
    {
      manual: true, // 手动发送请求
    };
});

watch(result, () => {
  if (result.value.data.code !== 200) {
    showToast(result.value.data.message);
  }
});
// 登录

// 登录
const userStore = useUserStore();
watchEffect(() => {
  // console.log(res);
  console.log(userStore);
});
</script>
<style scoped>
::v-deep(.btn) {
  background-color: #fe3c3a;
  border: 1px solid white;
  margin-top: 10vw;
  margin-left: 10vw;
}
</style>
