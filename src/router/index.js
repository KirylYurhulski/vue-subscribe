import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/main/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { layout: 'main-layout' },
  },
  {
    path: '/contacts',
    name: 'contact',
    component: () => import('@/views/main/ContactView.vue'),
    meta: { layout: 'main-layout' },
  },
  {
    path: '/login',
    name: 'logint',
    component: () => import('@/views/logo/LoginView.vue'),
    meta: { layout: 'logo-layout' },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
