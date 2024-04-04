import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BoardWrite from "@/views/BoardWrite.vue";
import BoardList from "@/views/BoardList.vue";
import BoardWrite2 from "@/views/BoardWrite2.vue";
import BoardList2 from "@/views/BoardList2.vue"
import Pinia from "@/views/Pinia.vue";
import Air from "@/views/Air.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/list",
    name: "list",
    component: BoardList,
  },
  {
    path: "/list2",
    name: "list2",
    component: BoardList2,
  },
  {
    path: "/write",
    name: "write",
    component: BoardWrite,
  },
  {
    path: "/write2",
    name: "write2",
    component: BoardWrite2,
  },
  {
    path: "/tutorials",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("@/components/TutorialsList.vue"),
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("@/components/TutorialDetails.vue"),
  },
  {
    path: "/tutorials/add",
    name: "add",
    component: () => import("@/components/AddTutorial.vue"),
  },
  {
    path: "/pinia",
    name: "pinia",
    component: Pinia,
  },
  {
    path: "/air",
    name: "air",
    component: Air,
  },
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
