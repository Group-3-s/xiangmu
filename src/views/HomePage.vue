<template>
  <!--BlcokType 根据传入的数据 对数据进行处理 并选择合适的组件渲染  -->
  <Search></Search>
  <BlockType
    v-for="item in pageData"
    :data="item"
    :key="item.blockCode"
    class="m-[3vw]"
  />
  <TabBar></TabBar>
</template>
<script setup>
import { ref } from "vue";
import { getHomePageData } from "@/api";
import BlockType from "@/views/children/BlockType.vue";
import TabBar from "@/components/Tabbar.vue";
import Search from "./children/Search.vue";

const pageData = ref([]);
getHomePageData().then((res) => {
  console.log(res);
  pageData.value = res;
});
</script>

<style scoped>
.filter {
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/><filter></svg>#colorize");
}
.SA {
  scrollbar-width: none;
}
</style>
