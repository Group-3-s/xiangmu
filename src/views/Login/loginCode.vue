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
import { ref, registerRuntimeCompiler, watch } from "vue";
import { useRequest } from "vue-request";
import { useUserStore } from "@/store";
import { showToast } from "vant";
// import axios from "axios";
import localforage from "localforage";

const qrimg = ref(); //图片
const key = ref(); //key
const code = ref(); //802 803 801

// const codekey = ref();
sendCodekey().then((res) => {
  console.log(res, "unikey");

  key.value = res.data.data.unikey;

  sendCodecreate(res, key.value).then((i) => {
    // console.log(i);
    console.log(res);
    qrimg.value = i.data.data.qrimg;
    // codekey.value = key.value;
  });

  console.log(key.value, "key");
  // 轮询

  const { run, data } = useRequest(sendCodecheck({ key: key.value }), {
    pollingInterval: 1000,
    manual: true,
  });
  //
  // watch(
  //   () => res,
  //   () => {
  //     code.value = res.data.code;
  //     if (res.data.code == 800) {
  //       console.log("二维码已将失效，请刷新");
  //       clearInterval(pollingInterval);
  //     }
  //     if (res.data.code == 802) return console.log("正在授权登录");
  //     if (res.data.code == 803) {
  //       clearInterval(pollingInterval);
  //       localforage.setItem("userInfo", res.data).then((res) => {
  //         console.log(res);
  //         showToast("登陆成功");
  //         clearInterval(pollingInterval);
  //       });
  //     }
  //   }
  // );
  // watch(){

  // }
});
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
