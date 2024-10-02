<!-- components/Logout.vue -->
<template>
  <div>
    <h2>Welcome, {{ authStore.user.email }}</h2>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

// Get the authentication store
const authStore = useAuthStore()

// Get the Vue Router instance
const router = useRouter()

// Define the logout function
const logout = () => {
  authStore.logout() // Clear the user data
  router.push('/login') // Redirect to login page
}
</script>
