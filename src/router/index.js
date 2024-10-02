import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Messages from '../views/Messages.vue'
import { useAuthStore } from '@/stores/auth'
import Dashboard from '@/components/Dashboard.vue'
import Login from '@/components/auth/Login.vue'
import Register from '@/components/auth/Register.vue'

const routes = [
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
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/messages',
    name: 'messages',
    component: Messages
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!authStore.isLoggedIn()) {
      next('/login')
    } else {
      next()
    }
  } else if (to.path === '/login' || to.path === '/register') {
    if (authStore.isLoggedIn()) {
      next('/dashboard')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
