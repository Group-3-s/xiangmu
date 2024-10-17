import { createApp } from "vue";
// eslint-disable-next-line import/no-unresolved
import "@/style.css";
import "vant/lib/index.css";
import { Icon } from "@iconify/vue";
import eventBus from "vue3-eventbus";
// eslint-disable-next-line import/no-unresolved
import App from "@/App.vue";
// eslint-disable-next-line import/no-unresolved, import/extensions
import initErrorHandle from "@/utils/initErrorHandle";
import router from "./router";
import pinia from "./store";

initErrorHandle();

createApp(App).use(router).use(pinia).use(Icon).use(eventBus).mount("#app");
