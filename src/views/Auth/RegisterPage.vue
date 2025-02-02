<template>
  <div>
    <h2 class="d-flex justify-content-center mt-4 mb-4">Form Register</h2>
    <a-form
      :model="formState"
      name="registerForm"
      @finish="onRegister"
      @onFinishFailed="onRegisterFailed"
      :layout="'vertical'"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username"></a-input>
      </a-form-item>
      <a-form-item
        label="Email"
        name="email"
        :rules="[
          {
            required: true,
            message: 'Please input your email',
          },
        ]"
      >
        <a-input v-model:value="formState.email" />
      </a-form-item>
      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password' }]"
      >
        <a-input-password v-model="formState.password"></a-input-password>
      </a-form-item>
      <a-form-item
        label="Password confirm"
        name="passwordConfirm"
        :rules="[
          {
            required: true,
            message: 'Please input password confirm',
          },
        ]"
      >
        <a-input-password v-model="formState.passwordConfirm"></a-input-password>
      </a-form-item>
      <a-form-item>
        <div class="d-flex justify-content-center">
          <a-button type="primary">Register</a-button>
        </div>
      </a-form-item>
      <div class="d-flex justify-content-end">
        <RouterLink :to="{ name: routerName.login }">Already have an account?</RouterLink>
      </div>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { routerName } from '@/constants/routerName'
import type { UserRegister } from '@/models/auth'
const formState = reactive<UserRegister>({
  username: undefined,
  email: undefined,
  password: undefined,
  passwordConfirm: undefined,
})
const onRegister = () => {
  console.log('register')
}
const onRegisterFailed = () => {
  console.log('on register fail')
}
</script>

<style lang="scss" scoped></style>
