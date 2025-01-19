<template>
  <div>user page</div>
  <a-button @click="handleLogout">logout</a-button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const handleLogout = () => {
  router.push({ name: 'login' })
}
</script>

<style lang="scss" scoped></style>
