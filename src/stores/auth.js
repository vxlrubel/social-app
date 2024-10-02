// stores/auth.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null // Retrieve user from local storage
  }),
  actions: {
    login(userData) {
      this.user = userData
      localStorage.setItem('user', JSON.stringify(userData)) // Save login state to local storage
    },
    logout() {
      this.user = null
      localStorage.removeItem('user') // Remove user from local storage
    },
    isLoggedIn() {
      return !!this.user
    }
  }
})
