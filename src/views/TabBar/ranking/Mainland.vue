<template>

  <div v-for="item in mv">
    <div>
      <img :src="item.cover" alt="" />
    </div>
    <!-- {{ item.id }} -->
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
