<template>
  <div>
    <div class="flex justify-between relative">
      <span
        @click="emit('clickTitle')"
        class="text-[#3e4659] font-bold my-[3vw] ml-[5vw]"
        >{{ props.title }}></span
      >
      <Icon
        @click="emit('clickMore')"
        icon="ri:more-2-fill"
        class="text-[3.761vw] text-[#9195a1] absolute top-[4vw] right-[0px]"
      />
    </div>
    <slot />
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
  title: {
    required: true,
    type: String,
  },
});

const emit = defineEmits(["clickMore", "clickTitle"]);
</script>
