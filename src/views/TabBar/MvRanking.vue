<template>
  <div
    class="flex items-center justify-center w-[100%] px-[4vw] py-[3vw] bg-[#fff] text-[#010101] text-[4.2vw] font-[600]"
  >
    MV排行榜
  </div>
  <div v-for="item in mv">
    <img :src="mv" alt="" />
    {{ item.id }}
  </div>
</template>

<script setup>
import { ref } from "vue";
import { MvRanking } from "@/api";
// import { useRouter } from "vue-router";

// const router = useRouter();
const mv = ref();

MvRanking()
  .then((res) => {
    console.log(res.data.data);
    mv.value = res.data.data;
  })
  .catch((err) => {
    console.log(err);
  });
</script>
