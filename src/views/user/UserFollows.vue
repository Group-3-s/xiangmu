<template>
    <div>
        <img :src="menu[0].avatarUrl" alt="">
    </div>
</template>

<script setup>
// eslint-disable-next-line import/no-cycle
import { UserInfo1 } from "@/api";
import { useRoute } from "vue-router";
import { ref } from "vue"

const route = useRoute();
const menu = ref([])
UserInfo1(route.query.id).then((res) => {
    menu.value = res.data.follow
    console.log(res);
})
</script>