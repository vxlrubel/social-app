<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="clearfix">
    <div class="container">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <nav>
          <RouterLink to="/" class="btn btn-primary me-3">Home</RouterLink>
          <RouterLink to="/about" class="btn btn-primary me-3">About</RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
