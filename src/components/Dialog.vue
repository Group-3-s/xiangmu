<template>
  <van-popup v-model="showPopup" position="bottom" :style="{ height: '50%' }">
    <div class="custom-popup-content">
      <h3>自定义标题</h3>
      <p>这里是弹框的内容，可以自定义。</p>
      <button @click="showPopup = false">关闭弹框</button>
    </div>
  </van-popup>
  <button @click="showPopup = true">打开弹框</button>
</template>

<script setup>
import { ref , onMounted } from "vue";
// import { Popup } from "vant";

const showPopup = ref(false);
onMounted(() => {
  showPopup.value = true;
});
</script>

<style scoped>
.custom-popup-content {
  padding: 20px;
  text-align: center;
}
</style>
