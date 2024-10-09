<template>
  <div>
    <!-- 返回 -->
    <div class="w-[100vw] h-[8vw] mt-[4vw]">
      <goBack></goBack>
      <h3 class="mt-[-8vw] ml-[14vw] text-xl">手机登录</h3>
    </div>
    <!-- 提示 -->
    <div class="w-[100vw] h-[14vw] text-[#b9b9b9] ml-[5vw] mt-[10vw] text-xl">
      未创建手机号登录后自动创建账号
    </div>
    <!-- phone -->
    <Myinput
      placeholder="请输入手机号"
      :value="userInfo.phone"
      @update:value="(e) => (userInfo.phone = e)"
      class="px-[25px]"
    />
    <van-button
      round
      color="#fff9f7"
      type="primary"
      plain
      to="/loginpsd"
      class="w-[70vw] h-[12vw] btn"
      >下一步</van-button
    >
  </div>
</template>
<script setup>
import goBack from "@/components/goBack.vue";
import Myinput from "@/components/Myinput.vue";
import { ref } from "vue";

const userInfo = ref({
  phone: "",
  // password: "",
  // captcha: "",
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
