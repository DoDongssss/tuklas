import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/Index.vue'
import aboutUsView from '@/views/about-us.vue'
import contactUsView from '@/views/contact-us.vue'
import product from '@/views/product.vue'
import inventory from '@/views/inventory.vue'
import events_management from '@/views/events_management.vue'
import smart_home_system from '@/views/smart_home_system.vue'
import educational_paper_consultation from '@/views/educational_paper_consultation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView
    },
    {
      path: '/about',
      name: 'About',
      component: aboutUsView
    },
    {
      path: '/contact',
      name: 'contact-us',
      component: contactUsView
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: inventory
    },
    {
      path: '/events_management',
      name: 'events_management',
      component: events_management
    },
    {
      path: '/smart_home_system',
      name: 'smart_home_system',
      component: smart_home_system
    },
    {
      path: '/educational_paper_consultation',
      name: 'educational_paper_consultation',
      component: educational_paper_consultation
    },
  ]
})

export default router
