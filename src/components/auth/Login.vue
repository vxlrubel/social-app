<!-- components/Login.vue -->
<template>
  <div>
    <h2>Login</h2>
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="login">Login</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')

const authStore = useAuthStore()
const router = useRouter()

const login = () => {
  const userData = { email: email.value, token: 'dummyToken' }
  authStore.login(userData)
  router.push('/dashboard')
}
</script>
