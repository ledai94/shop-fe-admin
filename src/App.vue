<script setup lang="ts">
import { ref } from 'vue'
import { Button } from 'ant-design-vue'
import WelcomeItem from '@/components/WelcomeItem.vue'
console.log(ref)
</script>

<template>
  <header class="mx-2">margin x 20px</header>
  <div class="css1">
    <div class="css1__layer2">
      <div class="css1__layer2--icon3">
        <!-- <p class="test">this is scss11ssss1</p> -->
        <p class="h1-title-color">this is scss11ssss1</p>
        <p class="h1-title">h1-title</p>
      </div>
    </div>
  </div>
  <WelcomeItem></WelcomeItem>
  <Button type="primary" class="btn btn-primary">add boostrap</Button>
  <a-button type="primary" class="mx-2">with bootstrap class</a-button>
  <a-button type="primary" class="mx-4">asda</a-button>

  <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../src/assets/img/img1.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="../src/assets/img/img1.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="../src/assets/img/img1.jpg" class="d-block w-100" alt="..." />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <main>main</main>
</template>

<style scoped lang="scss">
.a {
}
</style>
