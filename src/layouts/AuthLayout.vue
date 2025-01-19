<template>
  <div class="auth-layout">
    this is auth layout
    <br />
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.auth-layout {
  background-image: url('@/assets/img/background.jpg');
  width: 100vw;
  height: 100vh;
  background-size: contain;
}
</style>
