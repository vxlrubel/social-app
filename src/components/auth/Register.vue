<!-- components/Register.vue -->
<template>
  <div>
    <h2>Register</h2>
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="register">Register</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

// State for form inputs
const email = ref('')
const password = ref('')

// Get the authentication store
const authStore = useAuthStore()

// Get the Vue Router instance
const router = useRouter()

// Registration function
const register = () => {
  // Simulate registration (in real cases, you'd want to use an API call)
  const userData = { email: email.value, token: 'dummyToken' } // Simulated token for registered user
  authStore.login(userData) // Log the user in after registration
  router.push('/dashboard') // Redirect to dashboard after registration
}
</script>
