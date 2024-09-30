<template>
  <div>
    <div>
      {{ plcom.total }}
      <!-- <div v-for="index in plcom" :key="index">评论({{ index }})</div> -->
      <!-- {{ total }} -->
      <Icon icon="hugeicons:share-06" style="color: black" class="" />
    </div>
    <div v-for="item in plcom.comments" :key="item">
      <div>{{ item.content }}</div>
    </div>
  </div>
</template>

<script setup>
import { getPlaylistComment, getPlaylistSong } from "@/api";
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { useRoute } from "vue-router";
const plcom = ref({});
const route = useRoute();
// const total = ref();
getPlaylistComment()
  .then((res) => {
    console.log("res.data:", res.data);
    plcom.value = res.data;
    // total.value = res.data.total;
  })
  .catch((err) => {
    console.log(err);
  });
console.log(plcom);

getPlaylistSong(route.query.id).then((res) => {
  console.log(res);
}).catch((error)=>{
    console.log(error);
    
});
console.log(route.query.id);

</script>
