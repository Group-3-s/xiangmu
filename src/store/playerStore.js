// import { defineStore } from "pinia";
// import { ref } from "vue";
// import { Song, SongDelailed, getLyric } from "@/api/index";
// import { HandleLyric } from "@/views/player/utils";
// import { useRoute } from "vue-router";

// export const useAudioStore = defineStore("audio", {
//   state: () => ({
//     // 状态
//     Songdelailed: [], // 歌曲详情数组
//     Lyric: null, // 歌词对象
//     isbtnShow: true, // 是否显示播放按钮
//     handoff: true, // 是否循环播放
//     loop: false, // 循环播放状态
//     isLyricshow: true, // 是否显示歌词
//     SongUrl: "", // 歌曲 URL
//     interVal: null, // 定时器
//     currentLyricIndex: 0, // 当前歌词索引
//     duration: 0, // 歌曲时长
//     bgi: "", // 背景图片 URL
//     audioPlayer: ref(null), // audio 播放器实例
//   }),
//   actions: {
//     // 获取歌词
//     async fetchLyric(songId) {
//       try {
//         const res = await getLyric(songId);
//         this.Lyric = HandleLyric(res.data.lrc.lyric);
//       } catch (error) {
//         console.error("获取歌词失败:", error);
//       }
//     },
//     // 获取歌曲详情
//     async fetchSongDetails(songId) {
//       try {
//         const res = await SongDelailed(songId);
//         this.Songdelailed = res.data.songs;
//         this.bgi = res.data.songs[0].al.picUrl;
//       } catch (error) {
//         console.error("获取歌曲详情失败:", error);
//       }
//     },
//     // 获取歌曲 URL
//     async fetchSongUrl(songId) {
//       try {
//         const res = await Song(songId);
//         this.SongUrl = res.data.data[0].url;
//       } catch (error) {
//         console.error("获取歌曲 URL 失败:", error);
//       }
//     },
//     // 更新歌词索引
//     updateLyricIndex(currentTime) {
//       if (!this.Lyric || this.Lyric.length === 0) return;
//       let index = 0;
//       while (index < this.Lyric.length && currentTime > this.Lyric[index].time) {
//         index++;
//       }
//       this.currentLyricIndex = index - 1;
//     },
//     // 播放或暂停歌曲
//     SongPlay() {
//       if (this.isbtnShow) {
//         this.audioPlayer.value.play();
//         this.updateisbtnShow(false);
//         this.updateTime();
//       } else {
//         this.audioPlayer.value.pause();
//         this.updateisbtnShow(true);
//         clearInterval(this.interVal);
//       }
//     },
//     // 更新播放按钮状态
//     updateisbtnShow(value) {
//       this.isbtnShow = value;
//     },
//     // 更新时间并设置定时器
//     updateTime() {
//       if (!this.isbtnShow) {
//         this.interVal = setInterval(() => {
//           this.updateLyricIndex(this.audioPlayer.value.currentTime);
//         }, 1000);
//       }
//     },
//     // 切换循环播放
//     handoff1() {
//       this.handoff = !this.handoff;
//       this.loop = !this.loop;
//     },
//     // 返回歌单
//     backPalylist() {
//       this.$router.back();
//     },
//   },
//   getters: {
//     // 获取当前播放的歌词片段
//     currentLyric: (state) => {
//       if (state.Lyric && state.Lyric.length > 0) {
//         return state.Lyric[state.currentLyricIndex]?.word;
//       }
//       return null;
//     },
//     // 获取当前歌曲的 URL
//     currentSongUrl: (state) => state.SongUrl,
//     // 获取当前歌曲的详细信息
//     currentSongDetails: (state) => state.Songdelailed,
//   },
// });
