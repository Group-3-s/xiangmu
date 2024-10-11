<template>
  <div>
    <div class="h-[15vw] w-[100vw] flex items-center px-[4vw] justify-between">
      <div class="text-center w-[60vw]">
        <p class="h-[5vw] text-[4vw] text-[#fff] line-clamp-1">
          {{ Songdelailed[0].name }}
        </p>
        <p class="text-[2.8vw] text-[#BCBFBF] mt-[2vw] font-[400]">
          {{ Songdelailed[0].ar[0].name }}
          <span
            class="px-[1.6vw] py-[0.8vw] text-[#D8DBDB] text-[2vw] rounded-[8px] bg-[#84868B] ml-[1vw]"
            >关注</span
          >
        </p>
      </div>
    </div>
    <div></div>
    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>

  <audio :src="SongUrl" controls></audio>
</template>
<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { Song, SongPermissions, SongDelailed } from "@/api";

const route = useRoute();
const SongUrl = ref();
const Songdelailed = ref([]);
const { query } = route;

SongDelailed(query.id).then((res) => {
  Songdelailed.value = res.data.songs;
  console.log(Songdelailed.value);
});

SongPermissions(query.id).then((res) => {
  if (res.data.message === "ok") {
    Song(query.id).then((i) => {
      SongUrl.value = i.data.data[0].url;
    });
  } else {
    console.log(res.data.message);
  }
});
</script>
