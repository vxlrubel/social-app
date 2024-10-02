import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores/auth'
import Dashboard from '@/components/Dashboard.vue'
import Login from '@/components/auth/Login.vue'
import Register from '@/components/auth/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore()
        if (!authStore.isLoggedIn()) {
          next('/login')
        } else {
          next()
        }
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})

export default router
