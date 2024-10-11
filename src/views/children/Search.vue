<!-- 搜索框 -->
<template>
  <div class="pt-[1px]">
    <div class="relative">
      <Icon
        icon="gravity-ui:bars-ascending-align-left"
        width="4vw"
        height="4vw"
        style="color: #2a3146"
        class="absolute left-[5vw] bottom-[2vw]"
      />
      <div
        class="w-[76vw] h-[9vw] ml-[11vw] text-center border-[1px] my-[4vw] relative rounded-[5vw]"
      >
        <Icon
          icon="ph:magnifying-glass-bold"
          width="4vw"
          height="4vw"
          style="color: #9b93a9"
          class="absolute left-[3vw] bottom-[2vw]"
        />
        <Icon
          icon="noto:red-heart"
          width="6vw"
          height="6vw"
          class="absolute left-[10vw] bottom-[2vw]"
        />
        <input
          class="h-[8vw] absolute left-[16vw] top-[0vw] bg-[#f1f1f1]"
          type="text"
          placeholder="离别开出花-就是南方..."
        />
        <Icon
          icon="icon-park:scan-code"
          width="4vw"
          height="4vw"
          class="absolute right-[3vw] bottom-[2vw] text-[#9b93a9]"
        />
      </div>
      <Icon
        icon="ph:microphone"
        width="4vw"
        height="4vw"
        class="absolute right-[5vw] bottom-[2vw]"
      />
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>
