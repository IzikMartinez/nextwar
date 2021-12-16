import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/new-game",
    name: "NewGame",
    component: () => import("@/views/NewGame.vue"),
  },
  {
    path: "/map/:id",
    name: "Map",
    component: () => import("@/views/Map.vue"),
  },
  {
    path: "/counter/:id",
    name: "Counter",
    component: () => import("@/components/Counter.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
