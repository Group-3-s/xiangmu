<template>
    <div>

    </div>
</template>

<script setup>
// eslint-disable-next-line import/no-cycle
import { UserInfo1 } from "@/api";
import { useRoute } from "vue-router";
import { ref } from "vue"

const route = useRoute();
const menu = ref([])
// const user = ref([])
UserInfo1(route.query.id).then((res) => {
    menu.value = res
    console.log(res);
})
</script>