import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from "@/layouts/Main.layout";

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainLayout,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/Error.view.vue"),
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
