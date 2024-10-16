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
const router = useRouter();

// 定义响应式数据
const unikey = ref(""); // key
const qrurl = ref("");
const qrimgs = ref(""); // 二维码图片
const qrCheckData = ref({}); // 状态
const isLogin = ref(false); // 是否登录

// 获取二维码的key值
const getKey = async () => {
  const res = await axios.get(
    "https://netease-serrver01.vercel.app/login/qr/key",
    {
      params: {
        timerstamp: new Date().getTime(),
      },
    }
  );
  if (res.data.code === 200) {
    unikey.value = res.data.data.unikey;
    loginQqr(unikey.value);
  }
};

// 通过key去获取二维码
const loginQqr = async (key) => {
  const res = await axios.get(
    "https://netease-serrver01.vercel.app/login/qr/create",
    {
      params: {
        timerstamp: new Date().getTime(), // 传入参数时间戳
        qrimg: true,
        key: key,
      },
    }
  );
  if (res.data.code === 200) {
    qrurl.value = res.data.data.qrurl;
    qrimgs.value = res.data.data.qrimg;
    qrCheck();
  }
};

// 获取二维码的状态
const qrCheck = async () => {
  const res = await axios.get(
    "https://netease-serrver01.vercel.app/login/qr/check",
    {
      params: {
        key: unikey.value,
        timerstamp: new Date().getTime(), // 传入参数时间戳
        withCredentials: true, //解决跨域请求
      },
    }
  );
  if (res.data.code === 200) {
    qrCheckData.value = res.data;
    localforage.setItem("cookie", res.data.cookie);
    isLogin.value = true;
  }
};

// 获取登录之后的状态
const getStatus = async () => {
  const res = await axios.get(
    `https://netease-serrver01.vercel.app/login/status?cookie=${localforage.getItem(
      "cookie"
    )}`
  );
  if (res.data.code === 200) {
    localforage.setItem("isLogin", res.data.data.account.status);
    localforage.setItem("userid", res.data.data.account.id);
    localforage.setItem("avatarUrl", res.data.data.profile.avatarUrl);
    localforage.setItem("nickname", res.data.data.profile.nickname);
  }
};

// 组件挂载时执行
onMounted(() => {
  getKey();
});

// 观察isLogin的变化
watch(isLogin, async (newVal) => {
  if (newVal) {
    getStatus();
  }
});

// 定时检查二维码状态
const checkQRCodeStatus = () => {
  setInterval(async () => {
    const code = qrCheckData.value.code;
    if (code === 801) {
      // 二维码等待扫码
    } else if (code === 802) {
      // 二维码待确认
    } else if (code === 803) {
      // 二维码授权登录成功
      localforage.setItem("user", true);
      router.push("/home");
    }
  }, 2000);
};

// 开始检查二维码状态
checkQRCodeStatus();
</script>
<style scoped></style>
