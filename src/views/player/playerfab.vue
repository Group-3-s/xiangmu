<template>
  <div
    class="relative h-[100vh] pb-[12vw] bg-cover bg-no-repeat"
    :style="{ 'background-image': `url(${bgi})` }"
  >
    <div class="absolute z-[3] flex flex-wrap h-[100%] pb-[7.5vw] bg-gray-500/50">
      <div class="h-[15vw] w-[100vw] flex items-center px-[4vw] justify-between">
        <Icon
          icon="fe:arrow-down"
          width="1em"
          height="1em"
          style="color: white"
          class="text-[6vw] mt-[0.6vw]"
          @click="backPalylist"
        />
        <div class="text-center w-[60vw]">
          <p class="h-[5vw] text-[4vw] text-[#fff] line-clamp-1">
            {{ Songdelailed[0].name }}
          </p>
          <p class="text-[2.8vw] text-[#BCBFBF] mt-[2vw] font-[400]">
            {{ Songdelailed[0].ar[0].name }}
            <span
              class="px-[1.6vw] py-[0.8vw] text-[#D8DBDB] text-[2vw] rounded-[8px] bg-[#84868B] ml-[1vw]"
              >关注</span
            >
          </p>
        </div>
        <Icon
          icon="tabler:share"
          width="1em"
          height="1em"
          style="color: white"
          class="text-[6vw] mt-[0.6vw]"
        />
      </div>
      <!-- 歌曲中间部分 -->
      <div class="relative top-[7%] w-[100vw] h-[120vw] overflow-scroll">
        <!-- 歌曲磁盘 -->
        <div v-if="isLyricshow" @click="isLyric">
          <div
            class="absolute top-[10%] left-[50%] z-[10] origin-top-left rotate-[-13deg] translate-x-[-50%] rotated w-[30vw] h-[40vw]"
            :class="{ img_needle_active: !isbtnShow }"
          >
            <img
              class="h-[40vw] absolute top-[-11.2vw] left-[10vw]"
              src="../../assets//needle-ab.png"
              alt=""
            />
          </div>
          <div
            class="w-[80vw] h-[80vw] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-45%]"
          >
            <div class="absolute w-[80vw] h-[80vw]">
              <img
                class="absolute top-0 w-[80vw] h-[80vw]"
                src="../../assets/d7e4e3a244701ee85fecb5d4f6b5bd57.png"
                alt=""
              />
              <img
                class="w-[80vw] h-[80vw] absolute top-0"
                src="../../assets/disc_light.png"
                alt=""
              />
            </div>
            <img
              :src="Songdelailed[0].al.picUrl"
              class="w-[50vw] h-[50vw] absolute top-[15vw] left-[15vw] rounded-[50%] border-[5px] border-[#000] img_ar"
              :class="{ img_ar_active: !isbtnShow, img_ar_paused: isbtnShow }"
            />
          </div>
        </div>
        <!-- 歌曲歌词 -->
        <div v-else @click="isLyric">
          <p
            v-for="(item, index) in Lyric"
            :key="item"
            :class="{ active: index === currentLyricIndex }"
            class="text-[hsla(0,0%,88.2%,.8)] line-clamp-2 w-[100%] h-[12vw] px-[4vw] flex justify-center text-center"
          >
            {{ item.word }}
          </p>
        </div>
      </div>
      <div>
        <!-- 歌曲上部功能部分 -->
        <div class="w-[100vw] mt-[25vw]">
          <div v-if="isLyricshow" class="flex justify-evenly items-center">
            <div>
              <Icon icon="icon-park-outline:like" width="6vw" height="6vw" style="color: white" />
            </div>
            <Icon icon="iconoir:download-circle" width="6vw" height="6vw" style="color: white" />
            <Icon icon="fluent:people-20-regular" width="6vw" height="6vw" style="color: white" />
            <Icon icon="uil:comment-alt-message" width="6vw" height="6vw" style="color: white" />
            <Icon icon="mingcute:more-2-fill" width="6vw" height="6vw" style="color: white" />
          </div>
        </div>
        <!-- 进度条 -->
        <div class="my-[1rem]">
          <input
            type="range"
            class="w-[80%] h-[0.06vw] text-white ml-[10%]"
            min="0"
            max="duration"
            v-model="interVal"
            step="0.05"
          />
          {{ duration }}
        </div>
        <div class="h-[12.3vw] flex w-[100vw] items-center justify-evenly">
          <div @click="handoff1">
            <Icon
              v-if="handoff"
              icon="icon-park-outline:play-cycle"
              width="6vw"
              height="6vw"
              style="color: white"
            />
            <Icon v-else icon="lucide:repeat-1" width="6vw" height="6vw" style="color: white" />
          </div>
          <Icon icon="fluent:previous-16-filled" width="6vw" height="6vw" style="color: white" />
          <div
            class="w-[12vw] h-[12vw] rounded-[50%] bg-[#fff] flex items-center justify-center"
            @click="SongPlay()"
          >
            <Icon
              v-if="isbtnShow"
              icon="solar:play-bold"
              width="6vw"
              height="6vw"
              style="color: black"
            />
            <Icon
              v-else
              icon="lets-icons:stop-fill"
              width="6vw"
              height="6vw"
              style="color: black"
            />
          </div>
          <Icon icon="fluent:next-20-filled" width="6vw" height="6vw" style="color: white" />
          <Icon icon="ph:list" width="6vw" height="6vw" style="color: white" />
        </div>
      </div>
    </div>
  </div>
  <audio ref="audioPlayer" :src="SongUrl" :loop="loop" @ended="ended"></audio>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { ref, onUnmounted, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
// eslint-disable-next-line import/no-unresolved, import/extensions
import { Song, SongPermissions, SongDelailed, getLyric } from "@/api/index";
import { HandleLyric } from "./utils";

const router = useRouter();
const route = useRoute();
const Songdelailed = ref([]);
const Lyric = ref();
const { query } = route;
// 控制是否展示播放图标
const isbtnShow = ref(true);
// 控制播放器是否播放
const audioPlayer = ref(null);
// 控制是否展示循环播放图标
const handoff = ref(true);
// 控制是否循环播放
const loop = ref(false);
// 控制歌词展示
const isLyricshow = ref(true);
// 获取音乐地址
const SongUrl = ref();
// 当前的时间
const interVal = ref(0);
// 歌词索引值
const currentLyricIndex = ref(0);
// 歌曲总时长
const duration = ref(0);

const bgi = ref();
// 组件加载时挂载audioPlayer
onMounted(() => {
  audioPlayer.value.addEventListener("canplay", () => {});
});

// 根据定时器更新歌词
const updateLyricIndex = () => {
  const { currentTime } = audioPlayer.value;
  duration.value = audioPlayer.value.duration;
  // console.log(currentTime);
  // console.log(duration.value);

  // 确保索引没有超出歌词数组的长度，防止越界
  // 确保当前播放时间大于当前索引指向的歌词的时间
  let index = 0;
  while (index < Lyric.value.length && currentTime > Lyric.value[index].time) {
    // eslint-disable-next-line no-plusplus
    index++;
  }
  currentLyricIndex.value = index - 1;
};
// 定时器
const updateTime = () => {
  updateLyricIndex();
  if (!isbtnShow.value) {
    interVal.value = setInterval(updateLyricIndex, 1000);
    // 每1秒更新一次歌词
  }
};

// 控制磁盘显隐
const isLyric = () => {
  if (isLyricshow.value) {
    isLyricshow.value = false;
  } else {
    isLyricshow.value = true;
  }
};
// 获取歌词
getLyric(query.id).then((res) => {
  Lyric.value = HandleLyric(res.data.lrc.lyric);
});
// 获取歌曲详细/切换图标
SongDelailed(query.id).then((res) => {
  Songdelailed.value = res.data.songs;
  bgi.value = res.data.songs[0].al.picUrl;
  console.log(bgi.value);

  // console.log(Songdelailed.value);
});
// 控制播放图标
const updateisbtnShow = (value) => {
  isbtnShow.value = value;
};
// 控制是否循环播放
const handoff1 = () => {
  if (handoff.value) {
    handoff.value = false;
    loop.value = true;
  } else {
    handoff.value = true;
    loop.value = false;
  }
};
// 判断是否有版权
SongPermissions(query.id).then((res) => {
  if (res.data.message === "ok") {
    Song(query.id).then((i) => {
      SongUrl.value = i.data.data[0].url;
    });
  } else {
    console.log(res.data.message);
  }
});

// 点击切换是否播放音频/切换图标显示
const SongPlay = () => {
  if (isbtnShow.value) {
    audioPlayer.value.play();
    updateisbtnShow(false);
    updateTime(); // 播放时则调用函数
    console.log(query);
  } else {
    audioPlayer.value.pause();
    updateisbtnShow(true);
    updateTime();
    clearInterval(interVal.value); // 结束时则关闭循环
  }
};

// 返回歌单详细列表
const backPalylist = () => {
  router.back();
};

// 歌曲播放完毕后结束循环
const ended = () => {
  clearInterval(interVal.value);
  updateisbtnShow(true);
};

// 组件关闭时销毁定时器
onUnmounted(() => {
  clearInterval(interVal.value);
});
</script>

<style scoped>
/* 指针移动的样式 */
.img_needle {
  /* translate-x-[-50%] */
  translate: -50% 0px;
  transform-origin: 0, 0;
  transform: rotate(-13deg);
  transition: all 2s;
}
.img_needle_active {
  translate: -50% 0px;
  transform-origin: 0, 0;
  transform: rotate(0deg);
  transition: all 2s;
}

.img_ar {
  animation: rotate_ar 10s linear infinite;
}
/* 控制动画的开始 */
.img_ar_active {
  animation-play-state: running;
}
.img_ar_paused {
  animation-play-state: paused;
}
/* 歌曲图片旋转动画 */
@keyframes rotate_ar {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
.active {
  color: white; /* 当前行的颜色 */
  /* background-color: black; 当前行的背景颜色 */
  /* overflow-y: auto; /* 允许垂直滚动 */
  /* height: 100px; */
}
</style>
