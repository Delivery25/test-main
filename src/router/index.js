// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // Использование ленивой загрузки для оптимизации производительности
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/persons',
    name: 'persons',
    component: () => import('@/views/PersonsView.vue')
  },
  {
    path: '/persons/:id',
    name: 'person-detail',
    component: () => import('@/views/PersonDetailView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue')
  },
  {
    // Маршрут для страницы 404
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue')
  },
  {
    path: '/memory-game',
    name: 'memory-game',
    component: () => import('@/views/MemoryGameView.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  // Настройка прокрутки страницы при переходе между маршрутами
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0 }
    }
  }
})

export default router