<template>
  <div>
    <div>MV排行榜</div>
    <img :src="mv" alt="" />
    <!-- {{ mv.id }} -->
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
