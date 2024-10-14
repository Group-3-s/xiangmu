<template>
  <div>
    <div
      class="flex items-center justify-center w-[100%] px-[4vw] py-[3vw] bg-[#fff] text-[#010101] text-[4.2vw] font-[600]"
    >
      MV排行榜
    </div>
    <!-- 顶部导航栏 -->
    <Tabs v-model:activeKey="activeKey" centered tabBarGutter="13vw">
      <TabPane key="1" tab="内地" class="pane">
        <div
          class="overflow-auto px-[4vw] mt-[3vw]"
          v-for="(item, number) in mv1"
          :key="item.id"
        >
          <!-- <div v-if="currentCategory === '内地'"> -->
          <div class="w-[92vw]">
            <div class="w-[100%] h-[52vw] relative">
              <img
                :src="item.cover"
                alt=""
                class="w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]"
              />
              <div
                class="text-[#fff] text-[2.6vw] absolute top-[2vw] right-[2vw] flex items-center"
              >
                <Icon
                  icon="solar:play-bold"
                  style="color: #fdffff"
                  class="mr-[0.5vw]"
                />
                <div>{{ item.playCount }}</div>
              </div>
            </div>
            <div class="h-[15vw] flex items-center flex-wrap">
              <div class="flex h-[5vw] w-[100vw]">
                <span
                  class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]"
                  >{{ number + 1 }}</span
                >

                <span
                  class="flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]"
                  >{{ item.name }}</span
                >
              </div>
              <div class="flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                <span>{{ item.artistName }}</span>
              </div>
            </div>
          </div>
          <!-- </div> -->
        </div></TabPane
      >
      <TabPane key="2" tab="港台" force-render>
        <div
          class="overflow-auto px-[4vw] mt-[3vw]"
          v-for="(item, number) in mv2"
          :key="item.id"
        >
          <!-- <div v-if="currentCategory === '内地'"> -->
          <div class="w-[92vw]">
            <div class="w-[100%] h-[52vw] relative">
              <img
                :src="item.cover"
                alt=""
                class="w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]"
              />
              <div
                class="text-[#fff] text-[2.6vw] absolute top-[2vw] right-[2vw] flex items-center"
              >
                <Icon
                  icon="solar:play-bold"
                  style="color: #fdffff"
                  class="mr-[0.5vw]"
                />
                <div>{{ item.playCount }}</div>
              </div>
            </div>
            <div class="h-[15vw] flex items-center flex-wrap">
              <div class="flex h-[5vw] w-[100vw]">
                <span
                  class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]"
                  >{{ number + 1 }}</span
                >

                <span
                  class="flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]"
                  >{{ item.name }}</span
                >
              </div>
              <div class="flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                <span>{{ item.artistName }}</span>
              </div>
            </div>
          </div>
          <!-- </div> -->
        </div>
      </TabPane>
       <TabPane key="3" tab="欧美" force-render>
        <div
          class="overflow-auto px-[4vw] mt-[3vw]"
          v-for="(item, number) in mv3"
          :key="item.id"
        >
          <!-- <div v-if="currentCategory === '内地'"> -->
          <div class="w-[92vw]">
            <div class="w-[100%] h-[52vw] relative">
              <img
                :src="item.cover"
                alt=""
                class="w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]"
              />
              <div
                class="text-[#fff] text-[2.6vw] absolute top-[2vw] right-[2vw] flex items-center"
              >
                <Icon
                  icon="solar:play-bold"
                  style="color: #fdffff"
                  class="mr-[0.5vw]"
                />
                <div>{{ item.playCount }}</div>
              </div>
            </div>
            <div class="h-[15vw] flex items-center flex-wrap">
              <div class="flex h-[5vw] w-[100vw]">
                <span
                  class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]"
                  >{{ number + 1 }}</span
                >

                <span
                  class="flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]"
                  >{{ item.name }}</span
                >
              </div>
              <div class="flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                <span>{{ item.artistName }}</span>
              </div>
            </div>
          </div>
          <!-- </div> -->
        </div>
      </TabPane>
       <TabPane key="4" tab="韩国" force-render>
        <div
          class="overflow-auto px-[4vw] mt-[3vw]"
          v-for="(item, number) in mv4"
          :key="item.id"
        >
          <!-- <div v-if="currentCategory === '内地'"> -->
          <div class="w-[92vw]">
            <div class="w-[100%] h-[52vw] relative">
              <img
                :src="item.cover"
                alt=""
                class="w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]"
              />
              <div
                class="text-[#fff] text-[2.6vw] absolute top-[2vw] right-[2vw] flex items-center"
              >
                <Icon
                  icon="solar:play-bold"
                  style="color: #fdffff"
                  class="mr-[0.5vw]"
                />
                <div>{{ item.playCount }}</div>
              </div>
            </div>
            <div class="h-[15vw] flex items-center flex-wrap">
              <div class="flex h-[5vw] w-[100vw]">
                <span
                  class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]"
                  >{{ number + 1 }}</span
                >

                <span
                  class="flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]"
                  >{{ item.name }}</span
                >
              </div>
              <div class="flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                <span>{{ item.artistName }}</span>
              </div>
            </div>
          </div>
          <!-- </div> -->
        </div>
      </TabPane>
       <TabPane key="5" tab="日本" force-render>
        <div
          class="overflow-auto px-[4vw] mt-[3vw]"
          v-for="(item, number) in mv5"
          :key="item.id"
        >
          <!-- <div v-if="currentCategory === '内地'"> -->
          <div class="w-[92vw]">
            <div class="w-[100%] h-[52vw] relative">
              <img
                :src="item.cover"
                alt=""
                class="w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]"
              />
              <div
                class="text-[#fff] text-[2.6vw] absolute top-[2vw] right-[2vw] flex items-center"
              >
                <Icon
                  icon="solar:play-bold"
                  style="color: #fdffff"
                  class="mr-[0.5vw]"
                />
                <div>{{ item.playCount }}</div>
              </div>
            </div>
            <div class="h-[15vw] flex items-center flex-wrap">
              <div class="flex h-[5vw] w-[100vw]">
                <span
                  class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]"
                  >{{ number + 1 }}</span
                >

                <span
                  class="flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]"
                  >{{ item.name }}</span
                >
              </div>
              <div class="flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                <span>{{ item.artistName }}</span>
              </div>
            </div>
          </div>
          <!-- </div> -->
        </div>
      </TabPane>
    </Tabs>
    <!-- <div>
      <nav>
        <ul>
          <li v-for="category in categories" :key="category">
            <button
              :class="{ active: currentCategory === category }"
              @click="fn(category)"
            >
             @click="currentCategory = category"
              {{ category }}
            </button>
          </li>
        </ul>
      </nav>
      <div
        class="overflow-auto px-[4vw] mt-[3vw]"
        v-for="(item, number) in mv"
        :key="item.id"
      >
        <div v-if="currentCategory === '内地'">
          <div class="w-[92vw]">
            <div class="w-[100%] h-[52vw] relative">
              <img
                :src="item.cover"
                alt=""
                class="w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]"
              />
              <div
                class="text-[#fff] text-[2.6vw] absolute top-[2vw] right-[2vw] flex items-center"
              >
                <Icon
                  icon="solar:play-bold"
                  style="color: #fdffff"
                  class="mr-[0.5vw]"
                />
                <div>{{ item.playCount }}</div>
              </div>
            </div>
            <div class="h-[15vw] flex items-center flex-wrap">
              <div class="flex h-[5vw] w-[100vw]">
                <span
                  class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]"
                  >{{ number + 1 }}</span
                >

                <span
                  class="flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]"
                  >{{ item.name }}</span
                >
              </div>
              <div class="flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                <span>{{ item.artistName }}</span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="currentCategory === '港台'">
          <div class="w-[92vw]">
            <div class="w-[100%] h-[52vw] relative">
              <img
                :src="item.cover"
                alt=""
                class="w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]"
              />
              <div
                class="text-[#fff] text-[2.6vw] absolute top-[2vw] right-[2vw] flex items-center"
              >
                <Icon
                  icon="solar:play-bold"
                  style="color: #fdffff"
                  class="mr-[0.5vw]"
                />
                <div>{{ item.playCount }}</div>
              </div>
            </div>
            <div class="h-[15vw] flex items-center flex-wrap">
              <div class="flex h-[5vw] w-[100vw]">
                <span
                  class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]"
                  >{{ number + 1 }}</span
                >

                <span
                  class="flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]"
                  >{{ item.name }}</span
                >
              </div>
              <div class="flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                <span>{{ item.artistName }}</span>
              </div>
            </div>
          </div>
        </div>

        <div v-if="currentCategory === '欧美'">
          <div class="w-[92vw]">
            <div class="w-[100%] h-[52vw] relative">
              <img
                :src="item.cover"
                alt=""
                class="w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]"
              />
              <div
                class="text-[#fff] text-[2.6vw] absolute top-[2vw] right-[2vw] flex items-center"
              >
                <Icon
                  icon="solar:play-bold"
                  style="color: #fdffff"
                  class="mr-[0.5vw]"
                />
                <div>{{ item.playCount }}</div>
              </div>
            </div>
            <div class="h-[15vw] flex items-center flex-wrap">
              <div class="flex h-[5vw] w-[100vw]">
                <span
                  class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]"
                  >{{ number + 1 }}</span
                >

                <span
                  class="flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]"
                  >{{ item.name }}</span
                >
              </div>
              <div class="flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                <span>{{ item.artistName }}</span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="currentCategory === '韩国'">
          <div class="w-[92vw]">
            <div class="w-[100%] h-[52vw] relative">
              <img
                :src="item.cover"
                alt=""
                class="w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]"
              />
              <div
                class="text-[#fff] text-[2.6vw] absolute top-[2vw] right-[2vw] flex items-center"
              >
                <Icon
                  icon="solar:play-bold"
                  style="color: #fdffff"
                  class="mr-[0.5vw]"
                />
                <div>{{ item.playCount }}</div>
              </div>
            </div>
            <div class="h-[15vw] flex items-center flex-wrap">
              <div class="flex h-[5vw] w-[100vw]">
                <span
                  class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]"
                  >{{ number + 1 }}</span
                >

                <span
                  class="flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]"
                  >{{ item.name }}</span
                >
              </div>
              <div class="flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                <span>{{ item.artistName }}</span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="currentCategory === '日本'">
          <div class="w-[92vw]">
            <div class="w-[100%] h-[52vw] relative">
              <img
                :src="item.cover"
                alt=""
                class="w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]"
              />
              <div
                class="text-[#fff] text-[2.6vw] absolute top-[2vw] right-[2vw] flex items-center"
              >
                <Icon
                  icon="solar:play-bold"
                  style="color: #fdffff"
                  class="mr-[0.5vw]"
                />
                <div>{{ item.playCount }}</div>
              </div>
            </div>
            <div class="h-[15vw] flex items-center flex-wrap">
              <div class="flex h-[5vw] w-[100vw]">
                <span
                  class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]"
                  >{{ number + 1 }}</span
                >

                <span
                  class="flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]"
                  >{{ item.name }}</span
                >
              </div>
              <div class="flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                <span>{{ item.artistName }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
  <TabBar></TabBar>
</template>

<script setup>
import { ref } from "vue";
// import { Icon } from "@iconify/vue";
import { Tabs, TabPane } from "ant-design-vue";
// eslint-disable-next-line import/no-cycle
import {
  MvRanking1,
  MvRanking2,
  MvRanking3,
  MvRanking4,
  MvRanking5,
} from "@/api";
import TabBar from "@/components/Tabbar.vue";
import { genHoverStyle } from "ant-design-vue/es/input/style";

const activeKey = ref("1");
const mv1 = ref([]);
const mv2 = ref([]);
const mv3 = ref([]);
const mv4 = ref([]);
const mv5 = ref([]);
MvRanking1()
  .then((res) => {
    console.log(res);
    mv1.value = res.data.data;
  })
  .catch((err) => {
    console.log(err);
  });
MvRanking2()
  .then((res) => {
    console.log(res);
    mv2.value = res.data.data;
  })
  .catch((err) => {
    console.log(err);
  });
MvRanking3()
  .then((res) => {
    console.log(res);
    mv3.value = res.data.data;
  })
  .catch((err) => {
    console.log(err);
  });
MvRanking4()
  .then((res) => {
    console.log(res);
    mv4.value = res.data.data;
  })
  .catch((err) => {
    console.log(err);
  });
MvRanking5()
  .then((res) => {
    console.log(res);
    mv5.value = res.data.data;
  })
  .catch((err) => {
    console.log(err);
  });
// const fn = (e) => {
//   console.log(e);

//   currentCategory.value = e;
//   MvRanking(e)
//     .then((res) => {
//       console.log(res);
//       mv.value = res.data.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
</script>

<style>

</style>
<!-- <style>
nav {
  height: 44px;
  color: #2a3146;
  display: flex;
  justify-content: space-between;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  height: 44px;
  width: 100%;
}

nav ul li {
  width: 20%;
  height: 44px;
  margin: 0 10px;
  transition: border-bottom 0.3s;
}
nav ul li:hover {
  border-bottom: 3px solid red;
}
ul button {
  width: 100%;
  height: 44px;
  color: #9599a3;
  text-decoration: none;
  cursor: pointer;
  /* display: flex; */
  padding: 10px;
  transition: background-color 0.3s;
}

ul button:hover {
  color: #2a3146;
}
</style> -->
