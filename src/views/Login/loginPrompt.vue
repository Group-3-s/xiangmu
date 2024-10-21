<template>
  <div class="bg-[#db2d1f] container relative">
    <!-- 自动弹框 -->
    <Dialog></Dialog>
    <div class="content">
      <Icon
        icon="ri:netease-cloud-music-fill"
        width="50"
        height="50"
        style="color: white"
        class="absolute left-[50%] top-[20%] -translate-x-1/2"
      />
      <!--btn  -->
      <div class="absolute top-[55%] left-[15%]">
        <van-button
          round
          color="#db2d1f"
          type="primary"
          to="/loginpsd"
          plain
          class="w-[70vw] h-[12vw]"
          >手机号登录</van-button
        >

        <van-button
          round
          type="primary"
          to="/logincode"
          plain
          class="w-[70vw] h-[12vw] custom-button"
          >二维码登录</van-button
        >
        <van-button
          round
          type="primary"
          to=""
          plain
          class="w-[70vw] h-[12vw] custom-button"
          >立即体验</van-button
        >
      </div>
      <div>
        <!-- 更多登录 -->
        <ul>
          <li class="absolute bottom-[10%] left-[18%]">
            <!-- 微信 -->
            <Icon
              icon="ic:baseline-wechat"
              width="24"
              height="24"
              style="color: white"
              class="ml-[50%] translate-x-[-50%] mt-[50%] translate-y-[-50%]"
            />
          </li>
          <li class="absolute bottom-[10%] left-[36%]">
            <!-- QQ -->
            <Icon
              icon="mingcute:qq-line"
              width="24"
              height="24"
              style="color: white"
              class="ml-[50%] translate-x-[-50%] mt-[50%] translate-y-[-50%]"
            />
          </li>
          <li class="absolute bottom-[10%] left-[52%]">
            <!-- 微博 -->
            <Icon
              icon="ri:weibo-fill"
              width="24"
              height="24"
              style="color: white"
              class="ml-[50%] translate-x-[-50%] mt-[50%] translate-y-[-50%]"
            />
          </li>
          <li class="absolute bottom-[10%] left-[68%]">
            <!-- 邮箱-->
            <Icon
              icon="ic:outline-email"
              width="24"
              height="24"
              style="color: white"
              class="ml-[50%] translate-x-[-50%] mt-[50%] translate-y-[-50%]"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Icon } from "@iconify/vue";
// import { showDialog } from "vant";
// import { Button } from "vant";
import Dialog from "@/components/Dialog.vue";
// 禁止滚动
const isModalVisible = ref(false);
const preventScroll = () => {
  // 记录当前滚动条位置
  const scrollTop = window.scrollY;
  // 设置 body 为 fixed 并偏移当前滚动条位置
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollTop}px`;
};

const allowScroll = () => {
  // 恢复 body 默认样式
  document.body.style.position = "";
  document.body.style.top = "";
  // 恢复滚动条位置
  window.scrollTo(
    0,
    window.scrollY + parseInt(document.body.style.top || "0", 10)
  );
};

onMounted(() => {
  if (isModalVisible.value) {
    preventScroll();
  }
});

onBeforeUnmount(() => {
  allowScroll();
});
</script>
<style scoped>
.container {
  height: 42rem;
}

.content {
  height: 42rem;
}
::v-deep(.custom-button) {
  background-color: #db2d1f;
  color: white;
  border: 1px solid white;
  margin-top: 5vw;
}

li {
  width: 10vw;
  height: 10vw;
  line-height: 10px;
  border: 1px solid white;
  border-radius: 50%;
  list-style: none;
  float: left;
}
</style>
