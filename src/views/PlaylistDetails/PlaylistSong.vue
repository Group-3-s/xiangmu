<!-- eslint-disable max-len -->
<template>
  <div class="h-[85vw] bg-gradient-to-b from-[#4f6989] to-[#6e8bae] p-0 m-0">
    <div class="flex justify-between pt-[5vw]">
      <div class="flex">
        <Icon
          icon="bi:chevron-left"
          @click="BackHome"
          class="w-[5vw] h-[10vw] ml-[5vw] text-white"
        />
        <span class="text-[5vw] font-semibold mt-[1.7vw] ml-[5vw] text-white"
          >歌单</span
        >
      </div>
      <div class="flex mr-[4vw]">
        <button @click="toggleDrawer">
          <Icon
            icon="basil:search-outline"
            class="h-[8vw] w-[8vw] ml-[25vw] mt-[1vw] text-white"
          />
        </button>
        <Icon
          icon="ant-design:more-outlined"
          class="text-[8vw] mt-[1vw] ml-[2vw] text-white"
          @click="showDrawer = !showDrawer"
        />
      </div>
    </div>
    <div class="flex m-[3.8vw]">
      <div>
        <img
          class="w-[28vw] h-[28vw] rounded-[3vw] text-white"
          :src="menu.coverImgUrl"
          @click="showOverlay"
          alt=""
        />
      </div>
      <div>
        <div class="text-[4vw] font-semibold ml-[3vw] mr-[4vw] text-white">
          {{ menu.name }}
        </div>
        <div class="ml-[3vw] mt-[2vw] flex flex-row">
          <span
            ><img
              class="h-[6vw] w-[6vw] rounded-[3vw] mr-[2vw]"
              :src="menu.creator.avatarUrl"
              alt=""
          /></span>
          <span class="text-[3vw] text-white mt-[1vw]">{{
            menu.creator.nickname
          }}</span>
          <div
            class="w-[12vw] h-[5.3vw] rounded-[2.65vw] bg-[#748caa] text-[3vw] text-center leading-[5.3vw] text-white inline-block ml-[2vw]"
          >
            +关注
          </div>
        </div>
        <div class="mt-[2vw] ml-[1vw]">
          <span
            v-for="item in menu.algTags"
            :key="item.length"
            class="inline-block bg-[#b8bfc9] ml-[2vw] text-[3vw] rounded-[1vw] text-white opacity-80 px-[1vw] py-[0.5vw]"
            >{{ item }}></span
          >
        </div>
      </div>
    </div>
    <div
      class="mx-[3.8vw] text-[#c0cbd8] text-[3.162vw] line-clamp-1 mt-[3.675vw]"
    >
      {{ menu.description }}
    </div>
    <div class="flex justify-around mt-[4.5vw]">
      <div
        class="h-[10vw] w-[28.632vw] bg-slate-300 rounded-[5vw] flex justify-center"
        @click="shareDrawer = !shareDrawer"
      >
        <Icon
          icon="majesticons:share"
          style="color: white"
          class="h-[7vw] w-[7vw] mt-[1.5vw]"
        />
        <span class="text-white mt-[2vw] ml-[1vw]">{{ menu.shareCount }}</span>
      </div>
      <div
        class="h-[10vw] w-[28.632vw] bg-slate-300 rounded-[5vw] flex justify-center"
      >
        <Icon
          icon="eva:message-circle-fill"
          style="color: white"
          class="h-[7vw] w-[7vw] mt-[1.5vw]"
        />
        <span class="text-white mt-[2vw] ml-[1vw]">{{
          menu.commentCount
        }}</span>
      </div>
      <div
        class="h-[10vw] w-[28.632vw] bg-red-500 rounded-[5vw] flex justify-center"
      >
        <Icon
          icon="ph:folder-simple-plus-fill"
          style="color: white"
          class="h-[7vw] w-[7vw] mt-[1.5vw]"
        />
        <span class="text-white mt-[2vw] ml-[1vw]">{{
          menu.subscribedCount
        }}</span>
      </div>
    </div>
    <div
      class="rounded-t-lg bg-[#e2e6ed] flex justify-between h-[12vw] mt-[4vw] leading-[12vw] text-[3vw]"
    >
      <div class="flex">
        <Icon
          icon="mingcute:gift-2-line"
          style="color: red"
          class="m-[4vw] w-[4vw] h-[4vw]"
        /><span>VIP5.5折！抢独家护肤礼包</span>
      </div>
      <span class="mr-[6vw] text-[#888b8f]"
        >立即抢购<Icon class="inline-block ml-[2vw]" icon="bi:chevron-right"
      /></span>
    </div>
  </div>
  <div>
    <div class="h-[14vw] leading-[14vw] flex justify-between">
      <div class="flex ml-[3vw]">
        <Icon
          icon="icon-park-solid:play"
          style="color: red"
          class="w-[6vw] h-[6vw] mt-[4vw]"
        /><span class="text-[4.3vw] font-semibold ml-[3vw]">播放全部</span
        ><span class="text-[3vw] mt-[1vw]">({{ menu.tracks.length }})</span>
      </div>
      <div class="flex mr-[5vw]">
        <Icon
          icon="hugeicons:download-01"
          class="w-[6vw] h-[6vw] mt-[4vw] mr-[4vw]"
        />
        <Icon
          icon="flowbite:bars-from-left-outline"
          class="w-[6vw] h-[6vw] mt-[4vw]"
        />
      </div>
    </div>
    <div>
      <div>
        <div
          v-for="(item, index) in menu.tracks"
          :key="index"
          class="flex justify-between"
        >
          <div class="flex h-[15vw]">
            <div
              class="text-[#999999] text-[4vw] font-sans leading-[15vw] mx-[5vw]"
            >
              {{ index + 1 }}
            </div>
            <div class="mt-[2vw]">
              <div class="text-[4.5vw] font-sans font-medium line-clamp-1">
                {{ item.name }}
              </div>
              <div class="text-[3.25vw] text-[#7f838f] mt-[1vw] flex">
                <span class="line-clamp-1">{{ item.ar[0].name }}</span>
                <span class="mx-[1vw]">-</span>
                <span class="line-clamp-1">{{ item.al.name }}</span>
              </div>
            </div>
          </div>
          <Icon
            icon="ant-design:more-outlined"
            class="text-[8vw] text-[#9195a1] mt-[3.5vw] mr-[4vw]"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-between h-[16vw]">
    <div class="flex mt-[4.5vw]">
      <div
        v-for="item in collection"
        class="w-[8vw] h-[8vw] ml-[3vw]"
        :key="item.id"
      >
        <img
          :src="item.avatarUrl"
          class="h-[8vw] w-[8vw] rounded-[4vw]"
          alt=""
        />
      </div>
    </div>
    <div class="flex leading-[16vw]">
      <div class="text-[3vw] text-[#999999]">
        {{ menu.subscribedCount }}人收藏
      </div>
      <Icon icon="bi:chevron-right" class="mt-[6vw] mx-[2vw]" />
    </div>
  </div>
  <div>
    <transition name="fade">
      <div v-if="showDrawer" class="mask" @click="handleMaskClick"></div>
    </transition>
    <transition name="slide">
      <div v-if="showDrawer" class="drawer">
        <div
          class="h-[13vw] text-[4vw] text-[#aaadb5] leading-[13vw] pl-[4vw] border-b-[1px]"
        >
          <span>歌单：</span><span>{{ menu.name }}</span>
        </div>
        <ul>
          <li class="text-[4vw] flex h-[15.5vw] leading-[15.5vw]">
            <Icon
              icon="ph:sort-ascending"
              style="color: black"
              class="text-[8vw] w-[10vw] h-[15.5vw] mx-[3vw]"
            /><dev>选择歌曲排序</dev>
          </li>
          <li class="text-[4vw] flex h-[15.5vw] leading-[15.5vw]">
            <Icon
              icon="fluent-mdl2:delete"
              style="color: black"
              class="text-[8vw] w-[10vw] h-[15.5vw] mx-[3vw]"
            />
            <div>清空下载文件</div>
          </li>
          <li class="text-[4vw] flex h-[15.5vw] leading-[15.5vw]">
            <Icon
              icon="ph:warning"
              style="color: black"
              class="text-[8vw] w-[10vw] h-[15.5vw] mx-[3vw]"
            /><dev>举报</dev>
          </li>
        </ul>
      </div>
    </transition>
  </div>
  <div>
    <transition name="fade">
      <div v-if="shareDrawer" class="mask" @click="shareMaskClick"></div>
    </transition>
    <transition name="slide">
      <div v-if="shareDrawer" class="drawer">
        <div class="h-[13vw] text-[4vw] text-[#666666] leading-[13vw] pl-[4vw]">
          分享
        </div>
        <ul class="flex border-b-[1px] pb-[4vw]">
          <li class="mx-[3vw]">
            <div>
              <Icon
                icon="ion:add"
                style="color: black"
                class="text-[10vw] bg-[#f7f7f7] rounded-[7vw] mb-[2vw]"
              />
            </div>
            <div class="text-[3vw] text-center">一起听</div>
          </li>
          <li class="mx-[3vw]">
            <div>
              <Icon
                icon="arcticons:neteasecloudmusic"
                style="color: black"
                class="text-[10vw] bg-[#f7f7f7] rounded-[7vw] mb-[2vw]"
              />
            </div>
            <div class="text-[3vw] text-center">云音乐动态</div>
          </li>
          <li class="mx-[3vw]">
            <div>
              <Icon
                icon="nimbus:mail"
                style="color: black"
                class="text-[10vw] bg-[#f7f7f7] rounded-[7vw] mb-[2vw]"
              />
            </div>
            <div class="text-[3vw] text-center">私信</div>
          </li>
          <li class="mx-[3vw]">
            <div>
              <Icon
                icon="clarity:link-line"
                style="color: black"
                class="text-[10vw] bg-[#f7f7f7] rounded-[7vw] mb-[2vw]"
              />
            </div>
            <div class="text-[3vw] text-center">复制链接</div>
          </li>
        </ul>
        <ul class="flex justify-between mt-[5vw]">
          <li class="ml-[3vw]">
            <Icon
              icon="ant-design:wechat-filled"
              style="color: #7cc955"
              class="text-[12vw] bg-[#f7f7f7] rounded-[7vw] mb-[2vw]"
            />
          </li>
          <li>
            <Icon
              icon="cib:qq"
              style="color: #57a8ec"
              class="text-[12vw] bg-[#f7f7f7] rounded-[7vw] mb-[2vw]"
            />
          </li>
          <li>
            <Icon
              icon="ant-design:dingtalk"
              style="color: #d8544e"
              class="text-[12vw] bg-[#f7f7f7] rounded-[7vw] mb-[2vw]"
            />
          </li>
          <li>
            <Icon
              icon="fa6-brands:microblog"
              style="color: #529af1"
              class="text-[12vw] bg-[#f7f7f7] rounded-[7vw] mb-[2vw]"
            />
          </li>
          <li class="mr-[3vw]">
            <Icon
              icon="ri:more-2-fill"
              style="color: gray"
              class="text-[12vw] bg-[#f7f7f7] rounded-[7vw] mb-[2vw]"
            />
          </li>
        </ul>
      </div>
    </transition>
  </div>
  <div>
    <div v-if="drawerVisible" class="dropdown-mask" @click="toggleDrawer"></div>
    <transition name="slide-down">
      <div v-if="drawerVisible" class="dropdown-box">
        <div>
          <Icon
            icon="weui:search-filled"
            class="w-[7vw] h-[7vw] absolute top-[5vw] left-[6vw]"
            style="color: gray"
          />
          <input
            type="text"
            class="bg-[#6e8bae] w-[80vw] h-[8vw] a rounded-[20vw] mt-[5vw] ml-[5vw]"
            placeholder="搜索歌单内歌曲"
          />
          <span class="text-lg pt-[5vw] pl-[3vw]" style="color: white"
            >取消</span
          >
        </div>
      </div>
    </transition>
  </div>
  <div>
    <div v-if="isOverlayVisible" class="overlay" @click="closeOverlay">
      <div>
        <img
          class="w-[65vw] h-[65vw] rounded-[3vw] text-white absolute top-[15vw] left-[17vw]"
          :src="menu.coverImgUrl"
        />
        <div style="color: gray" class="mt-[30vw]">{{ menu.name }}</div>
        <div
          class="w-[78vw] mt-[6vw] h-[1vw] border-b-2"
          style="color: gray"
        ></div>
        <div class="mt-[3vw]">
          <span style="color: gray" class="text-lg">标签：</span>
          <span
            v-for="item in menu.tags"
            :key="item.length"
            class="inline-block bg-[#b8bfc9] ml-[2vw] text-[3vw] rounded-[3vw] text-white opacity-80 px-[1vw] py-[0.5vw]"
            >{{ item }}></span
          >
        </div>
        <div class="mt-[5vw]">
          <span style="color: gray" class="text-lg">{{
            menu.description
          }}</span>
        </div>
      </div>
    </div>
  </div>
  <PlaylistTop />
</template>
<script setup>
import { getPlaylistSong, getPlaylistSub } from "@/api";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";
import PlaylistTop from "./PlaylistTop.vue";

const router = useRouter();
const BackHome = () => {
  router.back();
};
const menu = ref([]);
const collection = ref([]);
getPlaylistSong().then((res) => {
  menu.value = res.data.playlist;
  collection.value = res.data.playlist.subscribers.slice(0, 5);
  console.log(res);
});
getPlaylistSub().then((res) => {
  console.log(res);
});
const showDrawer = ref(false);
const handleMaskClick = () => {
  showDrawer.value = false;
};
const shareDrawer = ref(false);
const shareMaskClick = () => {
  shareDrawer.value = false;
};

const drawerVisible = ref(false);
const toggleDrawer = () => {
  drawerVisible.value = !drawerVisible.value;
};
const isOverlayVisible = ref(false);

const showOverlay = () => {
  isOverlayVisible.value = true;
};
const closeOverlay = () => {
  isOverlayVisible.value = false;
};
</script>
<style scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 调整透明度实现变暗效果 */
  z-index: 999; /* 确保遮罩层在抽屉下方 */
}
.drawer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60vw; /* 根据需要调整高度 */
  background-color: white;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  will-change: transform; /* 优化性能 */
}

/* 定义过渡的样式 */
.slide-enter-active {
  transition: transform 0.55s ease-out;
}
.slide-leave-active {
  transition: transform 0.5s ease-in;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(100%); /* 抽屉初始位置在屏幕外 */
}
.a {
  text-indent: 10vw;
}
.dropdown-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
}

.dropdown-box {
  position: fixed;
  top: 0;
  left: 0;
  height: 15vw;
  width: 100%;
  max-height: 100vh;
  overflow: auto;
  z-index: 999;
  background-color: #4f6989;
  transform: translateY(0%);
  transition: transform 0.3s ease-in-out;
}

/* 定义过渡的进入和离开状态 */
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
}

.slide-down-enter-to,
.slide-down-leave-from {
  transform: translateY(0);
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  font-size: 24px;
}
</style>
