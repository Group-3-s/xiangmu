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
const unikey = ref(""); // key
const qrurl = ref("");
const qrimgs = ref(""); // 二维码图片
// const userId = ref();
const qrCheckData = ref({});
const isLogin = ref(false); // 是否登录
const router = useRouter();

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
    // if (res.data.code === 803) {
    localforage.setItem("cookie", res.data.cookie);
    isLogin.value = true;
    // }
  } catch (error) {
    console.log(error);
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
          // eslint-disable-next-line object-shorthand
          key: key,
        },
      }
    );
    qrurl.value = res.data.data.qrurl;
    qrimgs.value = res.data.data.qrimg;
    qrCheck();
  } catch (error) {
    console.log(error);
  }
};
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
    console.log("获取key失败:", error);
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
    console.log(res);

    localforage.setItem("isLogin", res.data.data.account.status);
    localforage.setItem("userid", res.data.data.account.id);
    localforage.setItem("avatarUrl", res.data.data.profile.avatarUrl);
    localforage.setItem("nickname", res.data.data.profile.nickname);
  } catch (error) {
    console.log(error);
  }
};
// 监听登录信息
watch(isLogin, async (newVal) => {
  if (newVal) {
    // eslint-disable-next-line prefer-const
    let times = setInterval(async () => {
      await qrCheck();
      // eslint-disable-next-line prefer-destructuring
      const code = qrCheckData.value.code;
      if (code === 803) {
        sessionStorage.setItem("user", true);
        clearInterval(times);
        await getStatus();
        router.push("/home");
      }
    }, 5000);
  }
});
// 获取用户信息
// const getUinfo = async () => {
//   try {
//     const res = await axios.get(
//       `https://netease-serrver01.vercel.app/user/detail?uid=3277116167`
//     );
//     console.log(res.data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// const intervalRef = ref(
//   setInterval(() => {
//     qrCheck();
//   }, 5000)
// );
// 监听isLogin的变化
// watch(isLogin, async (newValue) => {
//   if (newValue) {
//     clearInterval(intervalRef.value);
//     await getStatus();
//     getUinfo();
//     router.push("/home");
//   }
// });

// 定时检查二维码状态
onMounted(() => {
  getKey();
});
</script>
