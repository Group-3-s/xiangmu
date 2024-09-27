<!-- 菜单栏 -->
<!-- eslint-disable max-len -->
<template>
  <BetterScroll :config="{ scrollX: true, scrollY: false }" :dep="props.data">
    <div
      @click="emit('click', item, index)"
      v-for="(item, index) in props.data"
      :key="item.name"
      class="flex flex-col items-center w-[20vw]"
    >
      <div class="relative">
        <img :src="item.iconUrl" class="w-[15vw] filter" alt="" />
        <span
          class="text-[2.564vw] text-white absolute top-[54%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          v-if="index === 0"
          >{{ new Date().getDate() }}</span
        >
      </div>
      <span class="text-[2.99vw] text-[#576c6c]">{{ item.name }}</span>
    </div>
  </BetterScroll>
</template>
<script setup>
// eslint-disable-next-line object-curly-newline
import { defineProps, defineEmits } from "vue";
import BetterScroll from "@/components/BetterScroll.vue";

const props = defineProps({
  data: {
    type: Array,
    Required: true,
  },
});
const emit = defineEmits(["click"]);
</script>

<style scoped>
.filter {
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/><filter></svg>#colorize");
}
</style>
