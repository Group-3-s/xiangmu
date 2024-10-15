<template>
  <div class="bg-black w-screen h-screen pb-[-12vw] flex flex-wrap absolute">
    <!-- 顶部工具栏 -->
    <div
      class="flex justify-between items-center px-[6vw] pt-[3vw] w-[100%] h-[12vw] z-10 bg-black"
    >
      <Icon
        icon="fluent:ios-arrow-24-filled"
        style="color: white"
        class="text-[6vw] text-[#fefefe] iconify iconify--ep"
        @click="returnMvranking"
      />
      <div class="flex items-center">
        <Icon
          icon="carbon:shrink-screen-filled"
          style="color: white"
          class="text-[6vw] text-[#fefefe] mr-[7vw] iconify iconify--fluent"
        />
        <Icon
          icon="charm:menu-kebab"
          style="color: white"
          class="text-[6vw] text-[#fefefe] iconify iconify--ri"
        />
      </div>
    </div>
    <!-- Mv视频 -->
    <div class="w-[100%] h-[54vw] absolute top-[12%]">
      <div v-for="item in video" :key="item.id">
        <video
          :src="item.url"
          autoplay
          loop
          class="w-[100%] h-[100%] block mt-[-25%]"
        ></video>
        <!-- <div class="flex overflow-hidden z-10">
          <Icon
            icon="gravity-ui:play-fill"
            style="color: rgb(251, 251, 251, 0.4)"
            class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[14vw] iconify iconify--solar"
          />
        </div> -->
      </div>
    </div>
    <!-- 下方信息栏 -->
    <div class="w-[100%] absolute bottom-[0vw] z-10">
      <div class="flex justify-between px-[4vw] items-end pb-[3vw]">
        <div class="flex-1 mr-[10vw]">
          <!-- 头像 歌手名 关注 -->
          <div class="flex items-center mb-[3vw]">
            <img
              class="w-[9vw] h-[9vw] rounded-[50%] border-[2px] border-[#ffffff]"
              :src="mvdetail.cover"
              alt=""
            />
            <span class="mx-[2vw] text-[#ffffff] text-[4vw]">{{
              mvdetail.artistName
            }}</span>
            <div
              class="bg-[#eb4d44] h-[5vw] w-[7vw] flex items-center justify-center rounded-[2vw]"
            >
              <Icon icon="mingcute:add-fill" style="color: white" />
            </div>
          </div>
          <!-- MV 歌名 -->
          <div class="w-[85%] mb-[5vw] flex justify-between">
            <div class="text-[3.2vw] text-[white]">
              <span
                class="w-[7.3vw] mr-[2vw] leading-[5.2vw] text-center inline-block bg-[#333333] text-[#ACACAC]"
                >MV</span
              >
              {{ mvdetail.name }}
            </div>
            <div>
              <Icon
                icon="ep:arrow-down-bold"
                style="color: #acacac"
                class="h-[24px] text-[4vw]"
              />
            </div>
          </div>
          <!-- 动画显示歌名 -->
          <div class="w-[52%] leading-[24px] mb-[5vw] flex justify-between">
            <div>
              <Icon
                icon="solar:music-note-2-bold"
                style="color: #acacac"
                class="mt-[0.3rem]"
              />
            </div>
            <div class="text-[#ffffff] overflow-hidden w-[70%]">
              <span class="scrollani text-[3.5vw] inline-block">{{
                mvdetail.name
              }}</span>
            </div>
            <div>
              <Icon
                icon="octicon:heart-24"
                style="color: #ffffff"
                class="mt-[0.3rem] text-[3.7vw]"
              />
            </div>
          </div>
        </div>
        <!-- 右侧数据栏 -->
        <div class="w-[10vw] text-[#eaeaea]">
          <div class="flex items-center flex-wrap justify-center mb-[4vw]">
            <Icon icon="ant-design:like-filled" style="color: #eaeaea" />
            <span class="text-[3vw]">{{ mvdetailinfo.likedCount }}</span>
          </div>
          <div class="flex items-center flex-wrap justify-center mb-[4vw]">
            <Icon
              icon="fa-solid:comment-dots"
              style="color: #eaeaea"
              class="w-[5vw] h-[4vw]"
            />
            <span class="text-[3vw]">{{ mvdetailinfo.commentCount }}</span>
          </div>
          <div class="flex items-center flex-wrap justify-center mb-[4vw]">
            <Icon icon="icon-park-solid:share-two" style="color: #eaeaea" />
            <span class="text-[3vw]">{{ mvdetailinfo.shareCount }}</span>
          </div>
          <div class="flex items-center flex-wrap justify-center mb-[4vw]">
            <Icon icon="mdi:favorite-box-multiple" style="color: #eaeaea" />
            <span class="text-[3vw]">收藏</span>
          </div>
          <div class="relative flex items-center justify-center">
            <Icon
              icon="rivet-icons:circle"
              style="color: rgb(29 29 29)"
              class="w-[10vw] h-[10vw] rounded-[50%]"
            />
            <img
              class="w-[7vw] h-[7vw] rounded-[50%] absolute rotateani"
              :src="mvdetail.cover"
              alt=""
            />
          </div>
        </div>
      </div>
      <!-- 进度条 -->
      <div class="px-[0px] w-[100%] h-[4px]"></div>
      <!-- 发表评论 -->
      <div
        class="w-[100%] flex items-center justify-between text-[#4d4d4d] px-[4vw] py-[4vw]"
      >
        <span class="text-[4vw]">发条评论结识有趣的人</span>
        <Icon
          icon="system-uicons:scale-extend"
          style="color: #4d4d4d"
          class="text-[5.5vw] rotate-[90deg]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getMvVideo, getMvDetail, getMvDetailInfo } from "@/api";
import { useRoute, useRouter } from "vue-router";
import { Icon } from "@iconify/vue";

// eslint-disable-next-line quotes
const mvdetail = ref({ cover: "" });
const mvdetailinfo = ref([]);
const video = ref([]);
const route = useRoute();
const router = useRouter();
getMvVideo({ id: route.query.id })
  .then((res) => {
    console.log(res.data);
    video.value = res.data;
  })
  .catch((err) => {
    console.log(err);
  });

getMvDetail({ id: route.query.id })
  .then((res) => {
    console.log(res.data.data);
    mvdetail.value = res.data.data;
    console.log(mvdetail.value);
  })
  .catch((err) => {
    console.log(err);
  });
getMvDetailInfo({ id: route.query.id })
  .then((res) => {
    console.log(res.data);
    mvdetailinfo.value = res.data;
    console.log(mvdetailinfo.value);
  })
  .catch((err) => {
    console.log(err);
  });
const returnMvranking = () => {
  router.push({ path: "/mvranking" });
};
</script>

<style>
@keyframes scrollAni {
  0% {
    transform: translateX(180%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.scrollani {
  animation: scrollAni 10s linear infinite;
}

@keyframes rotateAni {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.rotateani {
  animation: rotateAni 10s linear infinite;
}
</style>
