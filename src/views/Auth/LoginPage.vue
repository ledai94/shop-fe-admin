<template>
  this is login page <br />
  <RouterLink :to="{ name: 'register' }">redirect to register page</RouterLink> <br />
  <RouterLink :to="{ name: 'user-list' }">redirect to user page</RouterLink>
</template>

<script setup lang="ts">
import { ref } from 'vue'
console.log(ref)
</script>

<style lang="scss" scoped></style>
