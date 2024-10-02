// stores/auth.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null
  }),
  actions: {
    login(userData) {
      this.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
    },
    logout() {
      this.user = null
      localStorage.removeItem('user')
    },
    isLoggedIn() {
      return !!this.user
    }
  }
})
