<template>
  <div>
    <div class="flex justify-between items-center h-[12vw]">
      <div class="flex items-center">
        <span
          @click="emit('clickTitle')"
          class="dark:text-[#e9ebf2] text-[#374d5b] text-[4vw] font-[800]"
          >{{ props.title }}</span
        >
        <Icon
          icon="ic:baseline-arrow-forward-ios"
          width="3vw"
          height="3vw"
          class="dark:text-[#e9ebf2] text-[#3d475b] font-[800] w-[4vw] h-[4vw] iconify iconify--mingcute"
        />
      </div>
      <Icon
        @click="emit('clickMore')"
        icon="ri:more-2-fill"
        class="dark:text-[#e9ebf2] text-[#3d475b] w-[4vw] h-[6vw] iconify iconify--ri"
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
