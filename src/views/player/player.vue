<template>
  <div
    class="px-[4.5vw] bg-[#F9F9FA] h-[12.5vw] border-b-[1px] border-[#F5F8FA] flex items-center w-[100vw] fixed bottom-[3.1rem] z-[10]"
  >
    <div class="flex items-center" @click="toplayerfab()">
      <div
        class="w-[10vw] h-[10vw] relative flex items-center justify-center rotateAnimation paused-animation"
      >
        <img class="w-[7vw] h-[7vw] rounded-[50%]" alt="" />

        <!-- :src="Songdelailed[0].al.picUrl" -->
      </div>
      <div
        class="text-[3vw] w-[60vw] text-ellipsis overflow-hidden whitespace-nowrap ml-[2vw]"
      >
        <!-- <span class="text-[#3E485E]">{{ Songdelailed[0].al.name }}</span> -->
        <!-- <span class="text-[#7B8591]">{{ Songdelailed[0].ar[0].name }}</span> -->
      </div>
    </div>
    <div
      class="w-[5.6vw] h-[5.6vw] relative ml-[2.2vw] overflow-hidden"
      @click="SongPlay()"
    >
      <Icon
        icon="octicon:play-16"
        width="5vw"
        height="5vw"
        style="color: black"
        v-if="isbtnShow"
      />
      <Icon
        icon="gg:play-pause-o"
        width="5vw"
        height="5vw"
        style="color: black"
        v-else
      />
    </div>
    <div class="pl-[4.5vw]">
      <Icon
        icon="mage:playlist-alternate-fill"
        width="5vw"
        height="5vw"
        style="color: black"
      />
    </div>
  </div>
  <audio ref="audioPlayer" :src="SongUrl"></audio>
</template>

<script setup>
import { Song, SongPermissions } from "@/api/index";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const route = useRoute();
const router = useRouter();
const SongUrl = ref();
// 获取歌曲ID
const { query } = route;
// const Songdelailed = ref([]);
const audioPlayer = ref(null);
// 暂停按钮的显示
const isbtnShow = ref("ture");

// 判断音乐是否存在版权 若不存在则显示无版权 如存在在播放音乐
SongPermissions(query.id).then((res) => {
  if (res.data.message === "ok") {
    Song(query.id).then((i) => {
      SongUrl.value = i.data.data[0].url;
    });
  } else {
    console.log(res.data.message);
  }
});

const updateisbtnShow = (value) => {
  isbtnShow.value = value;
};
// 获取歌曲详细信息
// SongDelailed(query.id).then((res) => {
//   Songdelailed.value = res.data.songs;
//   console.log(Songdelailed.value);
// });

// 点击切换是否播放音频/切换图标显示
const SongPlay = () => {
  if (isbtnShow.value) {
    audioPlayer.value.play();
    updateisbtnShow(false);
  } else {
    audioPlayer.value.pause();
    updateisbtnShow(true);
  }
};

// 跳转到歌曲详细页面
const toplayerfab = () => {
  const id = { id: query.id };
  router.push({ name: "playerfab", id });
};
</script>
