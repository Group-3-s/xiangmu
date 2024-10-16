<template>
  <div>
    <van-dialog v-model:show="show" show-cancel-button>
      <div class="w-[83vw] h-[90vw] content">
        <div
          class="w-[83vw] h-[13vw] mt-[5vw] ml-[6vw] text-xl font-bold text-black"
        >
          服务条款和隐私政策提示
        </div>
        <p class="ml-[6vw]">欢迎使用网易云音乐!</p>
        <div class="w-[83vw] h-[80vw] ml-[3vw] pl-[3vw]">
          <span class="inline-block mt-[5vw]">
            在您使用网易云音乐前，请您认真阅读并了解
            <a href="">《服务条款》</a>和<a href=""> 《隐私政策》</a>。
          </span>
          <span class="inline-block mt-[5vw]">
            如您未满14周岁,您还需通知您的监护人共同阅读
            <a href="">《儿童隐私政策》</a>， 点击“同
            意”即表示您和您的监护人已阅读并同意全部条款。
          </span>
        </div>
      </div>
    </van-dialog>
  </div>
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
.content {
  font-size: 18px;
  color: gray;
}
a {
  color: #4a7eb8;
}
</style>
