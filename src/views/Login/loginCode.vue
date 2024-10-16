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
    <img
      :src="qrimgs"
      alt=""
      style="width: 200px; height: 200px"
      class="w-[38vw] mx-auto mt-[7vw] mb-[9vw]"
    />
    <div class="text-[3vw] text-[#100A09] text-center mt-[10vw]">
      使用<span class="text-[#2C6AA1] mx-[1.5vw]">网易云音乐APP</span>扫码登录
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import localforage from "localforage";

// 定义响应式数据
const unikey = ref("");
const qrurl = ref("");
const qrimgs = ref("");
const qrCheckData = ref({});
const isLogin = ref(false);
const router = useRouter();

// 获取二维码的key值
const getKey = async () => {
  try {
    const res = await axios.get(
      "https://netease-serrver01.vercel.app/login/qr/key",
      {
        params: {
          timerstamp: new Date().getTime(),
        },
      }
    );
    unikey.value = res.data.data.unikey;
    loginQqr(unikey.value);
  } catch (error) {
    console.log("Error getting key:", error);
  }
};

// 通过key去获取二维码
const loginQqr = async (key) => {
  try {
    const res = await axios.get(
      "https://netease-serrver01.vercel.app/login/qr/create",
      {
        params: {
          timerstamp: new Date().getTime(),
          qrimg: true,
          key: key,
        },
      }
    );
    qrurl.value = res.data.data.qrurl;
    qrimgs.value = res.data.data.qrimg;
    qrCheck();
  } catch (error) {
    console.log("Error getting QR code:", error);
  }
};

// 获取二维码的状态
const qrCheck = async () => {
  try {
    const res = await axios.get(
      "https://netease-serrver01.vercel.app/login/qr/check",
      {
        params: {
          key: unikey.value,
          timerstamp: new Date().getTime(),
          withCredentials: true,
        },
      }
    );
    qrCheckData.value = res.data;
    if (res.data.code === 803) {
      localforage.setItem("cookie", res.data.cookie);
      isLogin.value = true;
      console.log(res.data);
    }
  } catch (error) {
    console.log("Error checking QR code:", error);
  }
};

// 获取登录之后的状态
const getStatus = async () => {
  try {
    const res = await axios.get(
      `https://netease-serrver01.vercel.app/login/status?cookie=${localforage.getItem(
        "cookie"
      )}`
    );
    localforage.setItem("isLogin", res.data.data.account.status);
    localforage.setItem("userid", res.data.data.account.id);
    localforage.setItem("avatarUrl", res.data.data.profile.avatarUrl);
    localforage.setItem("nickname", res.data.data.profile.nickname);
    console.log(res.data);
  } catch (error) {
    console.log("Error getting status:", error);
  }
};

// 获取用户信息
const getUinfo = async () => {
  try {
    const res = await axios.get(
      `https://netease-serrver01.vercel.app/user/detail?uid=32953014`
    );
    console.log(res.data);
  } catch (error) {
    console.log("Error getting user info:", error);
  }
};

// 监听isLogin的变化
watch(isLogin, async (newValue) => {
  if (newValue) {
    clearInterval(intervalRef.value);
    await getStatus();
    getUinfo();
    router.push("/home");
  }
});

// 定时检查二维码状态
const intervalRef = ref(
  setInterval(() => {
    qrCheck();
  }, 5000)
);

onMounted(() => {
  getKey();
});
</script>
