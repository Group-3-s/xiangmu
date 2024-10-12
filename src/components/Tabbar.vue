<template>
  <div
    class="fixed bottom-[0px] left-[0px] right-[0px] p-[10px] text-center bg-[#fff]"
  >
    <ul
      class="aa flex flex-grow justify-between text-center text-[#9195a0] bg-white"
    >
      <li
        v-for="item in routerList"
        :key="item.title"
        class="w-[70px] h-[52px]"
        :class="{ active: item.path === activePath }"
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
import { ref, onMounted } from "vue";

const activePath = ref("/");
const router = useRouter();
const routerList = ref([
  {
    title: "发现",
    path: "/home",
    iconUrl: "simple-icons:neteasecloudmusic",
  },
  {
    title: "排行榜",
    path: "/mvranking",
    iconUrl: "icon-park-outline:ranking",
  },
  {
    title: "我的",
    path: "/user",
    iconUrl: "mingcute:music-line",
  },
  {
    title: "关注",
    path: "/home",
    iconUrl: "octicon:people-16",
  },
  {
    title: "社区",
    path: "/home",
    iconUrl: "fluent:chat-multiple-32-regular",
  },
]);
onMounted(() => {
  activePath.value = routerList.value[0].path;
  console.log(routerList.value);
});
const switchTab = (path) => {
  router.push(path);
  activePath.value = path;
};
</script>

<style scoped>
li.active {
  color: red;
}
</style>
