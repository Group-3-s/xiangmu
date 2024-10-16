<!-- 搜索框 -->
<template>
  <div class="pt-[1px]">
    <div class="relative">
      <Icon
        icon="gravity-ui:bars-ascending-align-left"
        width="4vw"
        height="4vw"
        style="color: #2a3146"
        class="absolute left-[4vw] bottom-[2vw]"
        @click="showDrawer"
      />
      <Drawer
        v-model:open="open"
        class="custom-class"
        root-class-name="root-class-name"
        placement="left"
        :style="{ width: '85%' }"
        @after-open-change="afterOpenChange"
      >
        <div class="w-[70vw] h-[50vw] bg-[#f5f4f4] lv">
          <ul>
            <li></li>
            <li>我的消息</li>
            <li class="lvicon">
              <Icon icon="bytesize:chevron-right" />
            </li>
          </ul>
          <ul>
            <li></li>
            <li>云贝中心</li>
            <li class="lvicon">
              <Icon icon="bytesize:chevron-right" />
            </li>
          </ul>
          <ul>
            <li></li>
            <li>创作者中心</li>
            <li class="lvicon1">
              <Icon icon="bytesize:chevron-right" />
            </li>
          </ul>
        </div>
        <div class="w-[70vw] h-[50vw] bg-[#f5f4f4] lv">
          <ul>
            <li></li>
            <li>我的消息</li>
            <li class="lvicon">
              <Icon icon="bytesize:chevron-right" />
            </li>
          </ul>
          <ul>
            <li></li>
            <li>云贝中心</li>
            <li class="lvicon">
              <Icon icon="bytesize:chevron-right" />
            </li>
          </ul>
          <ul>
            <li></li>
            <li>创作者中心</li>
            <li class="lvicon1">
              <Icon icon="bytesize:chevron-right" />
            </li>
          </ul>
        </div>
        <div class="w-[70vw] h-[50vw] bg-[#f5f4f4] lv">
          <ul>
            <li></li>
            <li>我的消息</li>
            <li class="lvicon">
              <Icon icon="bytesize:chevron-right" />
            </li>
          </ul>
          <ul>
            <li></li>
            <li>云贝中心</li>
            <li class="lvicon">
              <Icon icon="bytesize:chevron-right" />
            </li>
          </ul>
          <ul>
            <li></li>
            <li>创作者中心</li>
            <li class="lvicon1">
              <Icon icon="bytesize:chevron-right" />
            </li>
          </ul>
        </div>
      </Drawer>
      <div
        class="w-[76vw] h-[9vw] ml-[11vw] text-center border-[1px] my-[4vw] relative rounded-[5vw]"
      >
        <Icon
          icon="ph:magnifying-glass-bold"
          width="4vw"
          height="4vw"
          style="color: #9b93a9"
          class="absolute left-[3vw] bottom-[2vw]"
        />
        <Icon
          icon="noto:red-heart"
          width="6vw"
          height="6vw"
          class="absolute left-[10vw] bottom-[2vw]"
        />
        <input
          class="h-[8vw] absolute left-[16vw] top-[0vw] bg-[#f1f1f1]"
          type="text"
          placeholder="离别开出花-就是南方..."
        />
        <Icon
          icon="icon-park:scan-code"
          width="4vw"
          height="4vw"
          class="absolute right-[3vw] bottom-[2vw] text-[#9b93a9]"
        />
      </div>
      <Icon
        icon="ph:microphone"
        width="4vw"
        height="4vw"
        class="absolute right-[5vw] bottom-[2vw]"
      />
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { Drawer } from "ant-design-vue";
import { ref } from "vue";

const open = ref(false);
const afterOpenChange = (bool) => {
  console.log("open", bool);
};
const showDrawer = () => {
  open.value = true;
};
</script>

<style scoped>
.neck {
  display: flex;
  margin-top: 4vw;
  margin-left: 6vw;
}
.neck1 {
  display: flex;
  margin-top: 4vw;
  margin-left: 6vw;
}
.neck1 span:nth-child(2) {
  margin-top: 1vw;
  margin-left: 0vw;
}
.neck2 {
  margin-left: 36vw;
}
ul {
  display: flex;
}
ul li {
  margin-left: 8vw;
  margin-top: 8vw;
}
.lvicon {
  margin-left: 28vw;
  margin-top: 10vw;
}
.lvicon1 {
  margin-left: 23vw;
  margin-top: 10vw;
}
</style>
