import BoardAdmin from '@/components/BoardAdmin.vue';
import BoardModerator from '@/components/BoardModerator.vue';
import BoardUser from '@/components/BoardUser.vue';
import Login from '@/components/Login.vue';
import Profile from '@/components/Profile.vue';
import Register from '@/components/Register.vue';

 

import Air from "@/views/Air.vue";
import BoardList from "@/views/BoardList.vue";
import BoardList2 from "@/views/BoardList2.vue";
import BoardWrite from "@/views/BoardWrite.vue";
import BoardWrite2 from "@/views/BoardWrite2.vue";
import Pinia from "@/views/Pinia.vue";
import ProjectCreate from '@/views/ProjectCreate.vue';
import ProjectEdit from "@/views/ProjectEdit.vue";
import ProjectList from "@/views/ProjectList.vue";
import ProjectShow from "@/views/ProjectShow.vue";
import Tree from "@/views/Tree.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  //
  
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },

  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  },
  {
    path: "/mod",
    name: "moderator",
    // lazy-loaded
    component: BoardModerator,
  },
  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: BoardUser,
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
  {
    path: "/tree",
    name: "tree",
    component: Tree,
  },
  {
    path: "/list",
    name: "list",
    component: ProjectList,
  },
  {
    path: "/create",
    name: "create",
    component: ProjectCreate,
  },
  {
    path: "/edit",
    name: "edit",
    component: ProjectEdit,
  },
  {
    path: "/show",
    name: "show",
    component: ProjectShow,
  },
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
