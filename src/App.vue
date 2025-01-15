<script setup lang="ts"></script>

<template>
  <header>header</header>
  <div class="css1">
    <div class="css1__layer2">
      <div class="css1__layer2--icon3">
        <p class="test">this is scss11ssss1</p>
      </div>
    </div>
  </div>
  <WelcomeItem></WelcomeItem>
  <el-button :icon="Check">this is el ui btn</el-button>
  <button type="button" class="btn btn-primary">add boostrap</button>
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
.test {
  color: $test-color;
}
</style>
