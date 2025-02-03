<template>
  <div>user page</div>
  <a-button @click="handleLogout">logout</a-button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ACCESS_TOKEN } from '@/constants/localStorage'
import { routerName } from '@/constants/routerName'

const router = useRouter()
const handleLogout = () => {
  localStorage.removeItem(ACCESS_TOKEN)
  router.push({ name: routerName.login })
}
</script>

<style lang="scss" scoped></style>
