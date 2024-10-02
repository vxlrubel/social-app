<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
</script>

<template>
  <header class="clearfix header border-bottom border-primary">
    <div class="container h-100">
      <div class="d-flex align-items-center h-100">
        <div class="logo-image h-100 d-flex align-items-center">
          <RouterLink to="/">
            <img alt="Vue logo" class="" src="@/assets/logo.svg" height="45" width="45" />
          </RouterLink>
        </div>
        <nav class="menu-items-parent m-0 p-0">
          <ul
            class="list-unstyled m-0 p-0 d-flex gap-2 align-items-center justify-content-end w-100"
            v-if="!authStore.isLoggedIn()"
          >
            <li>
              <RouterLink to="/register" class="btn btn-sm btn-primary me-3 rounded-pill px-4"
                >Register</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/login" class="btn btn-sm btn-outline-primary me-3 rounded-pill px-4"
                >Login</RouterLink
              >
            </li>
          </ul>
          <ul
            v-else
            class="list-unstyled m-0 p-0 d-flex gap-2 align-items-center justify-content-end w-100"
          >
            <li>
              <RouterLink to="/messages" class="text-decoration-none">Message</RouterLink>
            </li>
            <li>
              <button
                @click="authStore.logout()"
                class="btn btn-sm btn-outline-primary rounded-pill px-4"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
.header {
  --header-height: 3.5rem;
  --logo-width: 7.5rem;
  --navbar-width: calc(100% - var(--logo-width));
  --header-bg: #fff;
  height: var(--header-height);
  background: var(--header-bg);
  .logo-image {
    width: var(--logo-width);
  }
  .menu-items-parent {
    width: var(--navbar-width);
  }
}
</style>
