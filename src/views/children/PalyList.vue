<!-- 推荐歌单 -->
<template>
  <wrapper
    :title="props.data.name"
    @clickMore="moreHandler"
    @clickTitle="titleHander"
    class="my-[3vw]"
  >
    <BetterScroll :config="{ scrollX: true, scrollY: false }" :dep="props.data">
      <div
        @click="clickHandler"
        v-for="item in props.data.children"
        :key="item.id"
        class="h-[180px] w-[130px] mx-[2vw]"
      >
        <img
          class="w-[31.624vw] h-[31.453vw] rounded-[3vw] Shadow-custom"
          :src="item.imageUrl"
        />
        <div class="a overflow-hidden w-[130px] text-[13px] mt-[10px]">
          {{ item.title }}
        </div>
      </div>
    </BetterScroll>
  </wrapper>
</template>
<script setup>
import { defineProps } from "vue";
import BetterScroll from "@/components/BetterScroll.vue";
import Wrapper from "@/components/Wrapper.vue";

const props = defineProps({
  data: {},
});
const clickHandler = () => {};

const moreHandler = () => {};

const titleHander = () => {};
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
</style>
