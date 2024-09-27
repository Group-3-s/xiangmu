<template>
  <div>
    <div
      class="flex items-center justify-center w-[100%] px-[4vw] py-[3vw] bg-[#fff] text-[#010101] text-[4.2vw] font-[600]"
    >
      MV排行榜
    </div>
    <!-- 顶部导航栏 -->
    <nav>
      <ul>
        <li v-for="category in categories" :key="category">
          <button
            :class="{ active: currentCategory === category }"
            @click="currentCategory = category"
          >
            {{ category }}
          </button>
        </li>
      </ul>
    </nav>

    <!-- 页面内容 -->
    <div>
      <!-- 根据当前类别显示内容 -->
      <div v-if="currentCategory === '内地'">内地内容</div>
      <div v-if="currentCategory === '港台'">港台内容</div>
      <div v-if="currentCategory === '欧美'">欧美内容</div>
      <div v-if="currentCategory === '韩国'">韩国内容</div>
      <div v-if="currentCategory === '日本'">日本内容</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const categories = ["内地", "港台", "欧美", "韩国", "日本"];
const currentCategory = ref("内地"); // 默认选中 '内地'
</script>

<style>
/* 顶部导航栏样式 */
nav {
  height: 44px;
  color: #2a3146;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  height: 44px;
  width: 100%;
}

nav ul li {
  flex: 1;
  width: 20%;
  height: 44px;
  margin: 0 10px;
}

ul button {
  height: 44px;
  color: #2a3146;
  text-decoration: none;
  cursor: pointer;
  padding: 10px;
  transition: background-color 0.3s;
}

ul button:hover {
  background-color: #555;
}

ul button.active {
  background-color: #007bff;
}
</style>
