<template>
  <div class="inline-block text-[14px] w-[180px]">
    <input
      v-bind="attrs"
      :value="props.value"
      @input="(e) => emit('update:value', e.target.value)"
      class="w-[100vw] h-[13vw] leading-[40px] text-[#606266] bg-white out-line-none"
    />
  </div>
</template>
<script setup>
import { useAttrs, defineProps, defineEmits } from "vue";
// 单向数据流
const props = defineProps({
  value: String,
});
const emit = defineEmits(["update:value"]);
const attrs = useAttrs();
</script>
<style scoped>
input::placeholder {
  font-size: 16px;
}
</style>
