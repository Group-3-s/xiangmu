<template>
    <div class="h-[57vw]">
      <BetterScroll
        :config="{ scrollX: true, scrollY: false, click: true }"
        :dep="props.data"
      >
        <div
          v-for="item in playtop"
          :key="item.id"
          class="w-[30vw] h-[49vw] ml-[3.932vw] relative"
        >
          <img
            class="w-[30vw] h-[30vw] rounded-[3vw] mt-[10px]"
            :src="item.coverImgUrl"
            alt=""
          />
          <div class="absolute top-[4vw] right-[2vw] text-[10px] text-white flex">
            <Icon
              icon="ic:baseline-arrow-right"
              width="4vw"
              height="4vw"
              style="color: white"
            />{{ changeCount(item.playCount) }}
          </div>
          <div class="mt-[2vw] line-clamp-2 text-[#f2eeee]">
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
  import { Icon } from "@iconify/vue";
  
  const props = defineProps({
    data: {},
  });
  const playtop = ref([]);
  getPlaylisttop().then((res) => {
    playtop.value = res.data.playlists.slice(6, 12);
    console.log(playtop.value);
  });
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
  