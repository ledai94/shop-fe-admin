<script setup lang="ts">
import { ref } from 'vue'
import { Button } from 'ant-design-vue'
import WelcomeItem from '@/components/WelcomeItem.vue'
import theme from '@/theme'
console.log(ref)
console.log(theme)
</script>

<template>
  <a-config-provider :theme="theme">
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

    <main>main</main>
  </a-config-provider>
</template>

<style scoped lang="scss">
.a {
}
</style>
