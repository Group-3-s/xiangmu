<template>
  <div class="bg-[#f6f4f2] h-[65vw]">
    <div class="text-[3.5vw] text-[#9d9b9b] p-[3vw]">你可能还会喜欢</div>
    <BetterScroll
      :config="{ scrollX: true, scrollY: false, click: true }"
      :dep="props.data"
    >
      <div
        v-for="item in playtop"
        :key="item.id"
        class="w-[30vw] h-[49vw] ml-[3.932vw]"
      >
        <img
          class="w-[30vw] h-[30vw] rounded-[3vw] shadow-custom mt-[10px]"
          :src="item.coverImgUrl"
          alt=""
        />
        <div class="mt-[2vw] line-clamp-2 hover:text-[#c8c9c9]">
          {{ item.name }}
        </div>
      </div>
    </BetterScroll>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
import { getPlaylisttop } from "@/api";
import BetterScroll from "@/components/BetterScroll.vue";

const props = defineProps({
  data: {},
});
const playtop = ref([]);
getPlaylisttop().then((res) => {
  playtop.value = res.data.playlists.slice(0, 6);
  console.log(playtop.value);
});
</script>
