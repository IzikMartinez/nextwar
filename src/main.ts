import { createApp } from "vue";
import App from "@/App.vue";
import Router from "@/router";
import store from "@/store";
import { defineStore } from "pinia";

const app = createApp(App);
app.use(Router);
app.use(store);
app.use(defineStore);
app.mount("#app");
