<template>
  <div>
    <transition name="fade">
      <div v-if="showDrawer" class="mask" @click="handleMaskClick"></div>
    </transition>
    <transition name="slide">
      <div v-if="showDrawer" class="drawer">
        <p
          style="color: gray"
          class="dark:border-b-[#3C3C3C] flex justify-between items-center h-[10vw] border-b-[0.35vw] border-b-[#E8e8e8] px-[5vw]"
        >
          {{ props.data.name }}
        </p>
        <ul class="ml-[5vw]">
          <li class="h-[12vw] flex items-center">
            <Icon
              icon="iconamoon:like"
              width="5vw"
              height="5vw"
              style="color: black"
            />优先推荐
          </li>
          <li class="h-[12vw] flex items-center">
            <Icon
              icon="ri:dislike-line"
              width="5vw"
              height="5vw"
              style="color: black"
            />减少推荐
          </li>
          <li class="h-[12vw] flex items-center">
            <Icon
              icon="mingcute:more-4-line"
              width="5vw"
              height="5vw"
              style="color: black"
            />更多内容
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  data: {},
});

const showDrawer = ref(false);

const handleMaskClick = () => {
  showDrawer.value = false;
};
</script>
<style scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 调整透明度实现变暗效果 */
  z-index: 999; /* 确保遮罩层在抽屉下方 */
}
.drawer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px; /* 根据需要调整高度 */
  background-color: white;
  border-radius: 30px 30px 0 0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  will-change: transform; /* 优化性能 */
}

/* 定义过渡的样式 */
.slide-enter-active {
  transition: transform 0.55s ease-out;
}
.slide-leave-active {
  transition: transform 0.5s ease-in;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(100%); /* 抽屉初始位置在屏幕外 */
}
</style>
