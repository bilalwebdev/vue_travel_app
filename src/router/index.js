import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BrazilView from '../views/BrazilView.vue'
import Panama from '../views/Panama.vue'
import Jamaica from '../views/Jamaica.vue'
import Hawaii from '../views/Hawaii.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/brazil',
      name: 'brazil',
      component: BrazilView
    },
    {
      path: '/panama',
      name: 'panama',
      component: Panama
    },

    {
      path: '/hawaii',
      name: 'hawaii',
      component: Hawaii
    },
    {
      path: '/jamaica',
      name: 'jamaica',
      component: Jamaica
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
