<!-- 热门话题 -->
<template>
  <wrapper :title="props.data.name" @clickMore="showDrawer = !showDrawer">
    <div
      class="flex flex-col h-[130px] flex-wrap max-[430px] overflow-auto aa relative border-[#EBEDF2]"
    >
      <div
        v-for="(item, index) in props.data.children"
        :key="index"
        class="w-[68vw] h-[28vw] flex rounded-[10px] py-[4vw] px-[3vw] mr-[2.83vw] relative"
        :style="{ backgroundColor: index % 2 === 0 ? '#8685aa' : '#949494' }"
      >
        <div>
          <div class="text-[4vw] text-white">
            {{ item.uiElement.mainTitle.title }}
          </div>
          <div class="text-[2.6vw] text-[#D7D7D7]">
            {{ item.uiElement.subTitle.title }}
          </div>
          <div
            class="text-[2.6vw] text-[#fff] w-[42vw] text-ellipsis h-[10vw] overflow-hidden"
          >
            {{ item.resourceExtInfo.eventMsg }}
          </div>
        </div>
        <img
          :src="item.uiElement.image.imageUrl"
          alt=""
          class="w-[13.75vw] h-[13.75vw] rounded-[12px] absolute bottom-[2.9vw] right-[2.9vw]"
        />
      </div>
    </div>
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
import Wrapper from "@/components/Wrapper.vue";
import { Icon } from "@iconify/vue";

const showDrawer = ref(false);

const handleMaskClick = () => {
  showDrawer.value = false;
};

const props = defineProps({
  data: {},
});
console.log(props.data);
</script>
<style scoped>
.aa {
  scrollbar-width: none;
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
