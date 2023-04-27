import { createRouter, createWebHistory } from 'vue-router'
import app from '../MainBlock.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: app
    },

    {
      path: '/restaurant',
      name: 'restaurant',
      component: () => import('../components/RestaurantPage.vue')
    }
  ]
})

export default router
