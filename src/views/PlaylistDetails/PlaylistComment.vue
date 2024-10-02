<template>
  <div>
    <!-- 顶部标题栏 -->
    <div class="flex ml-[50%] translate-x-[-25%] justify-between pt-[1rem]">
      <div>评论({{ plcom.total }})</div>
      <Icon
        icon="hugeicons:share-06"
        style="color: black"
        class="mt-[0.25rem] mr-[-1rem] rotate-45"
      />
    </div>
    <!-- 获取歌单数据 -->
    <!-- <div class="w-[100%] h-[65vw] bg-pink-200"></div> -->

    <!-- 轻触评价 -->
    <div class="flex justify-between mx-[1rem] mt-[1rem]">
      <div class="text-[#999999]">轻触评价</div>
      <div class="flex text-[#939394] justify-between w-[12rem]">
        <div
          class="flex w-[16vw] h-[6vw] border border-[#999999] rounded-[3vw]"
        >
          <Icon
            icon="proicons:emoji"
            style="color: #999999"
            class="w-[1.3rem] h-[1.3rem]"
          />
          <div class="text-[0.8rem] mt-[0.1rem] ml-[0.2rem]">喜欢</div>
        </div>
        <div
          class="flex w-[16vw] h-[6vw] border border-[#999999] rounded-[3vw]"
        >
          <Icon
            icon="iconoir:emoji-think-left"
            style="color: #999999"
            class="w-[1.3rem] h-[1.3rem]"
          />
          <div class="text-[0.8rem] mt-[0.1rem] ml-[0.2rem]">一般</div>
        </div>
        <div
          class="flex w-[16vw] h-[6vw] border border-[#999999] rounded-[3vw]"
        >
          <Icon
            icon="fluent:emoji-sad-slight-24-regular"
            style="color: #999999"
            class="w-[1.3rem] h-[1.3rem]"
          />
          <div class="text-[0.8rem] mt-[0.1rem] ml-[0.2rem]">不行</div>
        </div>
      </div>
    </div>
    <!-- 评论标题 -->
    <div class="flex justify-between my-[1rem] mx-[1rem]">
      <div>评论区</div>
      <nav>
        <!-- <ul>
          <li v-for="category in categories" :key="category">
            <button
              :class="{ active: currentCategory === category }"
              @click="fn(category)"
            >
              {{ category }}
            </button>
          </li>
        </ul> -->
        <ul>
          <li>推荐</li>
          <li>最热</li>
          <li>最新</li>
        </ul>
      </nav>
    </div>
    <div>
      <!-- 根据当前类别显示内容 -->
      <!-- <div
        v-if="currentCategory === '推荐'"
        v-for="item in plcom.comments"
        :key="item"
        class="flex mb-[2rem] w-[90%] ml-[5%]"
      >
        <div>
          <img
            :src="item.user.avatarUrl"
            alt=""
            class="w-[10vw] rounded-[5vw]"
          />
        </div>
        <div class="text-[#666666] text-[3.5vw] ml-[1rem]">
          {{ item.user.nickname }}
        </div>
        <div class="text-[#999999] text-[2.3vw] pl-[-rem] mt-[1rem]">
          {{ item.timeStr }}
        </div>
        <div></div>
        <div class="text-[#333334] text-[4vw] mt-[2.5rem] ml-[-1.5rem]">
          {{ item.content }}
        </div>
      </div>
      <div
        v-for="item in plcom.hotComments"
        :key="item"
        class="flex relative"
        v-if="currentCategory === '最热'"
      >
        <div class="w-[15vw] rounded-[5vw]">
          <img
            :src="item.user.avatarUrl"
            alt=""
            class="w-[15vw] rounded-[5vw]"
          />
        </div>
        <div>{{ item.user.nickname }}</div>
        <div>{{ item.timeStr }}</div>
        <div></div>
        <div class="w-[30%]">{{ item.content }}</div>
      </div> -->
    </div>

    <!-- 获取评论 -->
    <div v-for="item in plcom.comments" :key="item" class="mb-[1rem] ml-[5%]">
      <!-- 评论用户头像 -->
      <div class="w-[10vw]">
        <img :src="item.user.avatarUrl" alt="" class="w-[10vw] rounded-[5vw]" />
      </div>
      <!-- 评论用户id -->
      <div class="text-[#666666] text-[3.5vw] ml-[3rem] mt-[-2rem]">
        {{ item.user.nickname }}
      </div>
      <!-- 评论时间 -->
      <div class="text-[#999999] text-[2.3vw] ml-[3rem]">
        {{ item.timeStr }}
      </div>
      <!-- 该评论点赞量 -->
      <div class="flex ml-[19rem] mt-[-2rem]">
        <div class="text-[#999999]">
          {{ item.likedCount }}
        </div>
        <Icon
          icon="iconamoon:like-light"
          style="color: #999999"
          class="mt-[0.2rem]"
        />
      </div>
      <!-- 评论 -->
      <div class="text-[#333334] w-[80%] text-[4vw] ml-[3rem] mt-[1rem]">
        {{ item.content }}
      </div>
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
// const categories = ["推荐", "最热", "最新"];
// const currentCategory = ref("推荐"); // 默认选中 '内地'
// const fn = (e) => {
// console.log(e);

// currentCategory.value = e;
getPlaylistComment()
  .then((res) => {
    console.log(res.data);
    plcom.value = res.data;
  })
  .catch((err) => {
    console.log(err);
  });
// };
console.log(plcom);

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
  color: #9599a3;
  transition: border-bottom 0.3s;
}
nav ul li:hover {
  color: #2a3146;
}
/* ul button {
  width: 100%;
  height: 6vw;
  color: #9599a3;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;
} */

/* ul button:hover {
  color: #2a3146;
} */
</style>
