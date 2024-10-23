import { createApp } from "vue";
// eslint-disable-next-line import/no-unresolved
import "@/style.css";
import "vant/lib/index.css";
import { Icon } from "@iconify/vue";

// eslint-disable-next-line import/no-unresolved
import App from "@/App.vue";
// eslint-disable-next-line import/no-unresolved, import/extensions
import initErrorHandle from "@/utils/initErrorHandle";
import router from "./router";
import pinia from "./store";

initErrorHandle();

const app = createApp(App);

app.use(router).use(pinia).use(Icon).mount("#app");
