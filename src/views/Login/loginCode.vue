<template>
  <div class="h-[100vh] bg-[#fdfbfc] pb-[12vw]">
    <div class="flex h-[19vw] items-center justify-between px-[5.5vw]">
      <goBack></goBack>
      <div class="text-[4vw] text-[#696969]">游客登录</div>
    </div>

    <img
      src="/public/logo.fill.svg"
      alt=""
      class="w-[38vw] mx-auto mt-[7vw] mb-[9vw]"
    />
    <!-- 二维码 -->
    <div class="relative">
      <img
        :src="qrimg"
        alt=""
        class="w-[40vw] h-[40vw] m-auto relative z-[1]"
      />
      <!-- <div
        class="z-[999] absolute h-[40vw] w-[40vw] top-0 left-1/2 transform -translate-x-1/2"
      >
        <div
          class="absolute bg-[#dddddd] w-[40vw] h-[40vw] opacity-60 z-[2]"
        ></div>
        <div
          class="shadow-lg absolute z-[3] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#FF5A35] to-[#F81227] text-[#fff] rounded-[200px] text-center leading-[7.6vw] h-[7.6vw] w-[20vw] text-[3vw]"
        >
          点击刷新
        </div>
      </div> -->
      <van-button @click="upDate" round type="success" loading="刷新中"
        >点击刷新二维码</van-button
      >
      <div class="text-[3vw] text-[#100A09] text-center mt-[10vw]">
        使用<span class="text-[#2C6AA1] mx-[1.5vw]">网易云音乐APP</span>扫码登录
      </div>
    </div>

    <!-- bottom -->
    <div class="box absolute bottom-[0px]"></div>
  </div>
</template>
<script setup>
import { sendCodekey, sendCodecreate, sendCodecheck } from "@/api";
import goBack from "@/components/goBack.vue";
import { ref, watch } from "vue";
import { useRequest } from "vue-request";
import { useUserStore } from "@/store";
import { showToast } from "vant";
// import axios from "axios";
import localforage from "localforage";

const qrimg = ref();
const key = ref();
const code = ref();

sendCodekey().then((res) => {
  key.value = res.data.data.unikey;

  sendCodecreate(res).then((i) => {
    // console.log(i);
    qrimg.value = i.data.data.qrimg;
  });
});
// 轮询
const {
  run: upDate,
  data: res,
  // loading,
} = useRequest(
  sendCodecheck(
    `https://netease-serrver01.vercel.app/login/qr/check?key=${
      key.value
    }&timestamp=${Date.now()}`
  ),
  {
    pollingInterval: 1000, //+!
    manual: true,
  }
);
watch(res, () => {
  code.value = res.data.code;
  if (res.data.code == 800) {
    console.log("二维码已将失效，请刷新");
    clearInterval(pollingInterval); //+!
  }
  if (res.data.code == 802) return console.log("正在授权登录");
  if (res.data.code == 803) {
    clearInterval(pollingInterval); //+!
    localforage.setItem("userInfo", res.data).then((res) => {
      console.log(res);
      showToast("登陆成功");
      clearInterval(pollingInterval); //+!
    });
  }
});

// const enterInterval = setInterval(() => {
//   sendCodecheck({ key: key.value }).then((data) => {
//     if (data.data.code === 802) {
//       return console.log("等待确认登录");
//     }
//     if (data.data.code === 803) {
//       return console.log("授权成功");
//       clearInterval(enterInterval);
//       return;
//     }
//     console.log(data.data.code);
//   });
// });
</script>
<style scoped>
.box {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 55vw;
  background-image: url("/public/背景.png");
  background-size: cover;
}
</style>
