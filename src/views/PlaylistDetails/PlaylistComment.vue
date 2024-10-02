<template>
  <div>
    <!-- 顶部标题栏 -->
    <div>
      评论({{ plcom.total }})
      <!-- <div v-for="index in plcom" :key="index">评论({{ index }})</div> -->
      <!-- {{ total }} -->
      <Icon icon="hugeicons:share-06" style="color: black" />
    </div>
    <!-- 获取歌单数据 -->
    <!-- <div class="w-[100%] h-[65vw] bg-pink-200"></div> -->

    <!-- 评论标题 -->
    <div class="flex justify-between my-[1rem]">
      <div>评论区</div>
      <nav>
        <ul>
          <li v-for="category in categories" :key="category">
            <button
              :class="{ active: currentCategory === category }"
              @click="fn(category)"
            >
              <!-- @click="currentCategory = category" -->
              {{ category }}
            </button>
          </li>
        </ul>
      </nav>
    </div>
    <!-- 获取评论 -->
    <div v-for="item in plcom.comments" :key="item" class="flex relative">
      <!-- 评论用户头像 -->
      <div>
        <img :src="item.user.avatarUrl" alt="" class="w-[10vw] rounded-[5vw]" />
      </div>
      <!-- 评论用户id -->
      <div>{{ item.user.nickname }}</div>
      <!-- 评论时间 -->
      <div>{{ item.timeStr }}</div>
      <!-- 该评论点赞量 -->
      <div></div>
      <!-- 评论 -->
      <div>{{ item.content }}</div>
    </div>
  </div>
</template>

<script setup>
import { getPlaylistComment } from "@/api";
import { ref } from "vue";
import { Icon } from "@iconify/vue";
// import { useRoute } from "vue-router";
const plcom = ref({});
// const route = useRoute();
// const total = ref();
getPlaylistComment()
  .then((res) => {
    console.log("res.data:", res.data);
    plcom.value = res.data;
    // total.value = res.data.total;
  })
  .catch((err) => {
    console.log(err);
  });
console.log(plcom);

const categories = ["推荐", "最热", "最新"];
const currentCategory = ref("推荐"); // 默认选中 '内地'
// const fn = (e) => {
//   console.log(e);

//   currentCategory.value = e;
//   MvRanking(e)
//     .then((res) => {
//       console.log(res);
//       mv.value = res.data.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// getPlaylistSong(route.query.id).then((res) => {
//   console.log(res);
// }).catch((error)=>{
//     console.log(error);

// });
// console.log(route.query.id);
</script>

<style>
nav {
  width: 10rem;
  height: 6vw;
  color: #2a3146;
  display: flex;
  justify-content: space-between;
  font-size: 4vw;
}

nav ul {
  list-style: none;
  display: flex;
  height: 6vw;
  width: 100%;
}

nav ul li {
  width: 33%;
  height: 6vw;
  transition: border-bottom 0.3s;
}
nav ul li:hover {
  border-bottom: 3px solid red;
}
ul button {
  width: 100%;
  height: 6vw;
  color: #9599a3;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

ul button:hover {
  color: #2a3146;
}
</style>
