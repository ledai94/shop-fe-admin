<template>
  <div class="admin-layout">
    admin layout
    <router-view />
    <a-button @click="handleLogout">logout</a-button>
  </div>
</template>

<script setup lang="ts">
// import AdminPage from '@/views/AdminPage.vue'
import { routerName } from '@/constants/routerName'
import { useRouter } from 'vue-router'
import { ACCESS_TOKEN } from '@/constants/localStorage'
const router = useRouter()
const handleLogout = () => {
  localStorage.removeItem(ACCESS_TOKEN)
  router.push({ name: routerName.login })
}
</script>

<style lang="scss" scoped>
.admin-layout {
  background-color: $primary-50;
  width: 100vw;
  height: 100vh;
}
</style>
