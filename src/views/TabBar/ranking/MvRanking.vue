<template>
  <div>
    <div
      class="flex items-center justify-center w-[100%] px-[4vw] py-[3vw] bg-[#fff] text-[#010101] text-[4.2vw] font-[600]"
    >
      MV排行榜
    </div>
    <!-- 顶部导航栏 -->
    <nav>
      <ul>
        <li v-for="category in categories" :key="category">
          <button
            :class="{ active: currentCategory === category }"
            @click="fn(category)"
          >
            <!-- @click="currentCategory = category" -->
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
    <!-- <van-tabs v-model:active="active" @click="fn(category)">
      <van-tab title="标签 1" @click="fn(category)">
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
        </div>
      </van-tab>
      <van-tab title="标签 2" @click="fn(category)">
        <div
          class="overflow-auto px-[4vw] mt-[3vw]"
          v-for="(item, number) in mv"
          :key="item.id"
        >
          
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
        </div>
      </van-tab>
      <van-tab title="标签 3" @click="fn(category)">
        <div
          class="overflow-auto px-[4vw] mt-[3vw]"
          v-for="(item, number) in mv"
          :key="item.id"
        >
          
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
        </div>
      </van-tab>
      <van-tab title="标签 4" @click="fn(category)">
        <div
          class="overflow-auto px-[4vw] mt-[3vw]"
          v-for="(item, number) in mv"
          :key="item.id"
        >
          
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
        </div>
      </van-tab>
      <van-tab title="标签 5" @click="fn(category)">
        <div
          class="overflow-auto px-[4vw] mt-[3vw]"
          v-for="(item, number) in mv"
          :key="item.id"
        >
          
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
      </van-tab>
    </van-tabs> -->
  </div>
  <TabBar></TabBar>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
// eslint-disable-next-line import/no-cycle
import { MvRanking } from "@/api";
import TabBar from "@/components/Tabbar.vue";

const mv = ref([]);
const categories = ["内地", "港台", "欧美", "韩国", "日本"];
const currentCategory = ref("内地"); // 默认选中 '内地'
const fn = (e) => {
  console.log(e);

  currentCategory.value = e;
  MvRanking(e)
    .then((res) => {
      console.log(res);
      mv.value = res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style>
/* 顶部导航栏样式 */
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
</style>
