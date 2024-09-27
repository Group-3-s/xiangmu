<!-- 轮播图  -->
<template>
  <Swiper
    :loop="true"
    :autoplay="true"
    pagination
    :modules="[Autoplay]"
    class="rounded-[5vw]"
  >
    <SwiperSlide v-for="item in props.data" :key="item">
      <img :src="item" />
    </SwiperSlide>
  </Swiper>
</template>
<script setup>
import { defineProps } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});
</script>
