<!-- 推荐歌单 -->
<template>
  <wrapper
    :title="props.data.name"
    @clickMore="showDrawer = !showDrawer"
    @clickTitle="titleHander"
    class="my-[3vw]"
  >
    <BetterScroll :config="{ scrollX: true, scrollY: false }" :dep="props.data">
      <div
        @click="clickHandler"
        v-for="item in props.data.children"
        :key="item.id"
        class="h-[180px] w-[130px] mx-[2vw] relative border-[#EBEDF2]"
      >
        <img
          class="w-[31.624vw] h-[31.453vw] rounded-[3vw] Shadow-custom"
          :src="item.imageUrl"
        />
        <div class="absolute top-[0vw] right-[2vw] text-[10px] text-white flex">
          <Icon
            icon="ic:baseline-arrow-right"
            width="4vw"
            height="4vw"
            style="color: white"
          />{{ changeCount(item.count) }}
        </div>

        <div class="a overflow-hidden w-[130px] text-[13px] mt-[10px]">
          {{ item.title }}
        </div>
      </div>
    </BetterScroll>
  </wrapper>
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
import { defineProps, ref } from "vue";
import BetterScroll from "@/components/BetterScroll.vue";
import Wrapper from "@/components/Wrapper.vue";
import { Icon } from "@iconify/vue";

const showDrawer = ref(false);
const props = defineProps({
  data: {},
});
const clickHandler = () => {};

// const moreHandler = () => {};

const handleMaskClick = () => {
  showDrawer.value = false;
};

const titleHander = () => {};

// eslint-disable-next-line consistent-return
const changeCount = (num) => {
  if (num >= 100000000) {
    return `${(num / 100000000).toFixed(2)}亿`;
  }
  if (num >= 10000) {
    return `${(num / 10000).toFixed(2)}万`;
  }
};
</script>
<style scoped>
.a {
  width: 130px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}
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
