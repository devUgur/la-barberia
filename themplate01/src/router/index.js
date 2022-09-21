import { createRouter, createWebHistory } from 'vue-router';

// Component imports
//import PriceComponent from "@/components/preise/preise.component";
import ServicesComponent from "@/components/services/Services.Component";

// View imports
import TreatmentsView from '@/views/treatments/Treatments.view'
import LandingPageView from "@/views/landing-page/LandingPage.view";
import ContactView from '@/views/Contact/Contact.view'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPageView
  },
  {
    path: '/about-us',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/treatments',
    name: 'TreatmentsView',
    component: TreatmentsView
  },
  {
    path: '/services',
    name: 'ServicesComponent',
    component: ServicesComponent
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
