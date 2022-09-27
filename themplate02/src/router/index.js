import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/Home.view'
import AboutView from '@/views/About.view';
import ServicesView from "@/views/Services.view";
import ContactView from '@/views/Contact.view'

import DevView from "@/views/Dev.view";

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/services',
    name: 'ServiceView',
    component: ServicesView
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: ContactView
  },
  {
    path: '/masthead',
    name: 'MastheadView',
    component: HomeView
  },
  {
    path: '/booking',
    name: 'BookingView',
    component: DevView
  },
  {
    path: '/dev',
    name: 'DevView',
    component: DevView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
