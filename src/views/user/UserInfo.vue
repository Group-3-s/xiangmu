<template>
    <div class="">
        <div class=" h-[70vw] w-[100vw]">
            <img :src="user.backgroundUrl" alt="">
        </div>
        <div class="h-[100vw] w-[80vw] bg-[#f5f4f4]  mt-[0vw] ml-[10vw] rounded-[3vw]">
            <img :src="user.avatarUrl" alt="" class="h-[13vw] w-[13vw] ml-[33vw] mt-[22vw] rounded-[6vw]">
            <div class="text-[4vw] font-semibold ml-[22vw] mr-[4vw] text-black mt-[4vw]">
                {{ user.nickname}}
            </div>
            <div class="signature font-semibold mr-[4vw]">
                {{user.signature }}
            </div>
        </div>
    </div>
</template>
<script setup>
// eslint-disable-next-line import/no-cycle
import { UserInfo } from "@/api";
import {  useRoute } from "vue-router";
import { ref } from "vue"

const route = useRoute();
const menu = ref([])
const user = ref([])
UserInfo(route.query.id).then((res) => {
    menu.value = res.data.account
    user.value = res.data.profile
    console.log(res);
})


</script>
<style scoped>
.signature{
    width: 270px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>