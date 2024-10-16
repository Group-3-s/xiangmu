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
      @click="enterPasd"
      :disabled="isValidPhoneNumber"
      class="w-[70vw] h-[12vw] btn"
      >下一步</van-button
    >
  </div>
</template>
<script setup>
import goBack from "@/components/goBack.vue";
import Myinput from "@/components/Myinput.vue";
import { ref, reactive, watch } from "vue";
// import router from "vue-router"
import { useRouter } from "vue-router";
const router = useRouter();

const userInfo = ref({
  phone: "",
  // password: "",
  // captcha: "",
});

const isValidPhoneNumber = ref(true);
const regex = /^1[3-9]\d{9}$/;

// 判断是否输入电话号码
watch(
  () => userInfo.phone,
  (newValue, oldValue) => {
    if (!newValue) {
      // alert("请输入电话号码");
      isValidPhoneNumber.value = false;
    } else if (regex.test(newValue)) {
      // alert("请输入正确的电话号码");
      isValidPhoneNumber.value = false;
    } else {
      isValidPhoneNumber.value = true;
    }
  }
);

// 方法用于跳转到下一个页面
const enterPasd = () => {
  if ((isValidPhoneNumber.value = true)) {
    router.push({ path: "/loginpsd", query: { keyword: userInfo.phone } });
  }
};
</script>
<style scoped>
::v-deep(.btn) {
  background-color: #fe3c3a;
  border: 1px solid white;
  margin-top: 10vw;
  margin-left: 10vw;
}
</style>
