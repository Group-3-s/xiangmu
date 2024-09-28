<!-- 分配并管理组件 -->
<template>
  <div>
    <component
      :is="blockTypeComponentMap[props.data.blockCode]"
      :data="propsData"
    />
  </div>
</template>
<script setup>
import { defineProps, computed } from "vue";
import Menu from "./Menu.vue";
import Banner from "./Banner.vue";
import PalyList from "./PalyList.vue";
import NewSongs from "./NewSongs.vue";
import HotTopic from "./HotTopic.vue";
import MusicCalendar from "./MusicCalendar.vue";

const blockTypeComponentMap = {
  //
  HOMEPAGE_BANNER: Banner,
  HOMEPAGE_BLOCK_OLD_DRAGON_BALL: Menu,
  HOMEPAGE_BLOCK_PLAYLIST_RCMD: PalyList,
  HOMEPAGE_BLOCK_NEW_ALBUM_NEW_SONG: NewSongs,
  HOMEPAGE_BLOCK_HOT_TOPIC: HotTopic,
  HOMEPAGE_MUSIC_CALENDAR: MusicCalendar,
  // HOMEPAGELBLOGK_MGC_PLAYLIST:“需达歌单”,
  HOMEPAGE_BLOCK_NEWLHOT_COMMENT: "热门评论",
  // HOMEPAGE_BLOCK_OFFICIAL_PLAYLIST:“官方数单”,
  // HOMEPAGE_BLOCK_STYLE_RCMD:"",
  // HOMEPAGE_BLOCK VIDEO PLAYLIST:"",
  // HOMEPAGE_BLOEK YUNCUNPRODUCED:"",
  // HOMEPAGE_MUSIC MLOG:"",
  // .HOMEPAGE_PODCAST24:"",
  // HOMEPAGE_VOICEBOOK RCMD:"",
};

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const propsData = computed(() => {
  switch (props.data.blockCode) {
    case "HOMEPAGE_BLOCK_OLD_DRAGON_BALL":
      return props.data.creatives[0].resources.map((item) => ({
        name: item.uiElement.mainTitle.title,
        iconUrl: item.uiElement.image.imageUrl,
      }));
    case "HOMEPAGE_BANNER":
      return props.data.extInfo.banners.map((item) => item.pic);
    case "HOMEPAGE_BLOCK_PLAYLIST_RCMD":
      return {
        name: props.data.uiElement.subTitle.title,
        children: props.data.creatives.map((item) => ({
          id: item.resources[0].resourceId,
          playCount: item.resources[0].resourceExtInfo.playCount,
          imageUrl: item.resources[0].uiElement.image.imageUrl,
          title: item.resources[0].uiElement.mainTitle.title,
          count: item.resources[0].resourceExtInfo.playCount,
        })),
      };
    case "HOMEPAGE_BLOCK_NEW_ALBUM_NEW_SONG":
      return {
        name: props.data.uiElement.subTitle.title,
        children: props.data.creatives
          .map((item) => item.resources)
          .flat(Infinity),
      };
    case "HOMEPAGE_BLOCK_HOT_TOPIC":
      return {
        name: props.data.uiElement.subTitle.title,
        children: props.data.creatives
          .map((item) => item.resources)
          .flat(Infinity),
      };
    case "HOMEPAGE_MUSIC_CALENDAR":
      return {
        name: props.data.uiElement.subTitle.title,
        children: props.data.creatives.map((item) => ({
          id: item.resources[0].resourceId,
          imageUrl: item.resources[0].uiElement.image.imageUrl,
          title: item.resources[0].uiElement.mainTitle.title,
        })),
      };
    default:
      return null;
  }
});
</script>
