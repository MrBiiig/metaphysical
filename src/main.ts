import { createApp } from "vue";
import App from "./App.vue";
import Arco from "@arco-design/web-vue";
import router from "./router";
import '@arco-design/web-vue/dist/arco.css';
import "./global.less";

createApp(App).use(router).use(Arco).mount("#app");
