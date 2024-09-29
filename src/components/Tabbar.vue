<template>
  <div
    class="fixed bottom-[0px] left-[0px] right-[0px] p-[10px] text-center bg-[#fff]"
  >
    <ul
      class="aa flex flex-grow justify-between text-center text-[#9195a0] bg-white"
    >
      <li
        v-for="(item, index) in routerList"
        :key="index"
        class="w-[70px] h-[52px] hover:text-[#ff5151]"
        @click="switchTab(item.path)"
      >
        <icon :icon="item.iconUrl" class="text-[22px] ml-[25px]" />
        <span class="text-[12px]"> {{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";

const router = useRouter();

const routerList = [
  {
    title: "发现",
    path: "/home",
    iconUrl: "simple-icons:neteasecloudmusic",
    color: "color:black",
    selected: "color:red",
  },
  {
    title: "排行榜",
    path: "/mvranking",
    iconUrl: "icon-park-outline:ranking",
    color: "color:black",
    selected: "color:red",
  },
  {
    title: "我的",
    path: "/home",
    iconUrl: "mingcute:music-line",
    color: "color:black",
    selected: "color:red",
  },
  {
    title: "关注",
    path: "/home",
    iconUrl: "octicon:people-16",
    color: "color:black",
    selected: "color:red",
  },
  {
    title: "社区",
    path: "/home",
    iconUrl: "fluent:chat-multiple-32-regular",
    color: "color:black",
    selected: "color:red",
  },
];

const switchTab = (path) => {
  router.push(path);
};
</script>

<style scoped>
.aa:hover {
  color: red;
}
</style>
