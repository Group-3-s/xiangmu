<template>
  <div>
    <div class="flex justify-between relative">
      <span
        @click="emit('clickTitle')"
        class="text-[#3e4659] text-[1rem] font-bold my-[3vw] ml-[5vw]"
        >{{ props.title
        }}<Icon
          icon="ic:baseline-arrow-forward-ios"
          width="0.8rem"
          height="0.8rem"
          class="absolute top-[39%] left-[23%]"
      /></span>
      <Icon
        @click="emit('clickMore')"
        icon="ri:more-2-fill"
        width="0.8rem"
          height="0.8rem"
        class="text-[#9195a1] absolute top-[39%] right-[0]"
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

<style></style>
