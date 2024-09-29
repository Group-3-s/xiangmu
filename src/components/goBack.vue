<template>
  <div>
    <button @click="goBack">
      <Icon
        icon="ph:arrow-left-light"
        width="24"
        height="24"
        style="color: black"
        class="ml-[5vw] text-xs"
      />
    </button>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>
<style scoped></style>
