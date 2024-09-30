<template>
    <div class="" :style="boxStyle">
        <div>
            <Icon icon="oui:word-wrap" @click="showDrawer = !showDrawer" />
        </div>
        <div>
            <transition name="fade">
                <div v-if="showDrawer" class="mask z-index=999" @click="handleMackClik">
                </div>
            </transition>
            <transition name="slide">
                <div v-if="showDrawer" class="drawer z-index=1000">

                </div>
            </transition>
        </div>
        <div class=" relative z-index=1">
            <div class=" h-[70vw] w-[100vw] absolute z-index=2">
                <img :src="user.backgroundUrl" alt="">
            </div>
            <div class="h-[100vw] w-[80vw] bg-[#f5f4f4]  mt-[97vw] ml-[10vw] rounded-[3vw] absolute z-index=3 ">
                <img :src="user.avatarUrl" alt="" class="h-[13vw] w-[13vw] ml-[33vw] mt-[-6vw] rounded-[6vw]">
                <div class="text-[4vw] font-semibold ml-[22vw] mr-[4vw] text-black mt-[4vw]">
                    {{ user.nickname }}
                </div>
                <div class="signature font-semibold mr-[4vw]">
                    {{ user.signature }}
                </div>
                <div class="span">
                    <router-link :to="{ path: '/userfollows' }">
                        <span>{{ user.follows }} 关注</span>
                    </router-link>

                    <span>{{ user.followeds }} 粉丝</span>
                    <span>lv 9</span>
                </div>
                <div class="span1">
                    <span>IP:湖北</span>
                    <span>湖北 武汉</span>
                    <span>村龄8年</span>
                </div>
                <div class="b">
                    <div class="bb">
                        编辑资料
                    </div>
                    <div class="w-[10vw] h-[10vw] bg-gray-200 rounded-[5.5vw] absolute right-[23vw] top-[40vw]">
                        <Icon @click="fn" :icon="currentIcon" class="w-[10vw] h-[10vw]" style="color: black" />
                    </div>
                    <div v-if="isViss">
                       <UserArtist></UserArtist>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Tabbar></Tabbar>
</template>
<script setup>
// eslint-disable-next-line import/no-cycle
// import { useUserStore } from "@/store";
// import { watchEffect } from "vue";

// const userStore = useUserStore()
// watchEffect(()=>{
//     console.log(userStore.userInfo);

// })


// eslint-disable-next-line import/no-cycle
import { UserInfo } from "@/api";
import { useRoute } from "vue-router";
import { ref, computed } from "vue"
import { Icon } from "@iconify/vue";
import Tabbar from "@/components/Tabbar.vue";
import UserArtist from "./UserArtist.vue";

const route = useRoute();
const showDrawer = ref(false);
const handleMackClik = () => {
    showDrawer.value = false
}
const menu = ref([])
const user = ref([])

const icon1 = "mingcute:down-line";
const icon2 = "mingcute:up-line";
const defaultIcon = ref(true);
const isLarge = ref(false);
const isVis = ref(true);
const isViss = ref(false);

const currentIcon = computed(() => defaultIcon.value ? icon1 : icon2);
const fn = () => {
    defaultIcon.value = !defaultIcon.value;
    isViss.value = !isViss.value;
    isVis.value = !isVis.value;
    isLarge.value = !isLarge.value;
};
const boxStyle = computed(() => ({
    height: isLarge.value ? "110vw" : "85vw",
}));
UserInfo(route.query.id).then((res) => {
    menu.value = res.data.account
    user.value = res.data.profile
    console.log(res);
})


</script>
<style scoped>
.signature {
    width: 270px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

span {
    font-size: 14px;
}

.span {
    margin-left: 26vw;
    color: gray;
}

.span1 {
    margin-left: 12vw;
}

.span1 span {
    width: 30vw;
    height: 15vw;
    border: 1px solid grey;
    margin-left: 3vw;
    border-radius: 1vw;
}

.bb {
    width: 25vw;
    height: 10vw;
    border: 1px solid grey;
    border-radius: 5vw;
    text-align: center;
    display: flex;
    align-items: center;
    margin-left: 15vw;
    justify-content: center
}

.b {

    margin-top: 4vw;
}

.mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* 调整透明度实现变暗效果 */
    z-index: 999;
    /* 确保遮罩层在抽屉下方 */
}

.drawer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 80%;
    height: 100%;
    /* 根据需要调整高度 */
    background-color: white;
    border-radius: 30px 30px 0 0;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    will-change: transform;
    /* 优化性能 */
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
    transform: translateX(-100%);
    /* 抽屉初始位置在屏幕外 */
}
</style>