import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/Home.view'
import AboutView from '@/views/About.view';
import ServicesView from "@/views/Services.view";
import ContactView from '@/views/Contact.view'
import DevView from "@/views/Dev.view";
import ImpressumView from "@/views/Impressum.view";
import InstagramGalleryComponent from "@/components/instagram/InstagramGallery.component";

import store from '../store/index';

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
    path: '/impressum',
    name: 'ImpressumView',
    component: ImpressumView
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
  {
    path: '/instagram',
    name: 'Instagram',
    component: InstagramGalleryComponent
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/NotFound.view.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  store.dispatch('nav/scrollToTop');
  next();
})

export default router
