import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export * from "./countStore";
// eslint-disable-next-line import/no-cycle
export * from "./userStore";
export default pinia;
