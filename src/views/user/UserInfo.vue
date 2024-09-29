<template>
    <div class=" ">
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
            <div class="h-[100vw] w-[80vw] bg-[#f5f4f4]  mt-[71vw] ml-[10vw] rounded-[3vw] absolute z-index=3 ">
                <img :src="user.avatarUrl" alt="" class="h-[13vw] w-[13vw] ml-[33vw] mt-[22vw] rounded-[6vw]">
                <div class="text-[4vw] font-semibold ml-[22vw] mr-[4vw] text-black mt-[4vw]">
                    {{ user.nickname }}
                </div>
                <div class="signature font-semibold mr-[4vw]">
                    {{ user.signature }}
                </div>
                <div class="span">
                    <span>27 关注</span>
                    <span>5 粉丝</span>
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
                </div>
            </div>
        </div>
    </div>

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
import { ref } from "vue"
import { Icon } from "@iconify/vue";

const route = useRoute();
const showDrawer = ref(false);
const handleMackClik = () => {
    showDrawer.value = false
}
const menu = ref([])
const user = ref([])
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
    margin-left: 16vw;
    color: gray;
}

.span1 {
    margin-left: 5vw;
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
    justify-content: center
}

.b {
    margin-left: 13vw;
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