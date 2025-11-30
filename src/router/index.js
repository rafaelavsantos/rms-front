import { createRouter, createWebHistory } from 'vue-router'
import authRoutes from './authRoutes'
import mainRoutes from './mainRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    authRoutes,
    mainRoutes,
  ],
})

export default router
