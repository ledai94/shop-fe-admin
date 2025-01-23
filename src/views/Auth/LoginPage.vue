<template>
  <RouterLink :to="{ name: 'register' }">redirect to register page</RouterLink> <br />
  <RouterLink :to="{ name: 'user-list' }">redirect to user page</RouterLink>
  <div class="login-page">
    <a-form
      :model="formState"
      name="normal_login"
      class="login-form"
      @finish="onLogin"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="Email"
        name="email"
        :rules="[{ required: true, message: 'Please input your email!' }]"
      >
        <a-input v-model:value="formState.email">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>
      <div class="d-flex justify-content-center">
        <a-form-item>
          <a-button
            :disabled="disabled"
            type="primary"
            html-type="submit"
            class="login-form-button"
          >
            Log in
          </a-button>
          Or
          <a-button @click="handleRegister" href="">register now!</a-button>
        </a-form-item>
      </div>
      <div class="d-flex justify-content-end">
        <a class="login-form-forgot" href="">Forgot password</a>
      </div>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import authService from '@/services/auth'
import type { UserLogin } from '@/models/auth'
// import type { PromiseApi } from '@/models/promiseApi'
import { ACCESS_TOKEN } from '@/constants/localStorage'
import { useRouter } from 'vue-router'
import { routerName } from '@/constants/routerName'
import { notification } from 'ant-design-vue'
const router = useRouter()

const onLogin = async (values: UserLogin): Promise<void> => {
  try {
    const res = await authService.login({
      email: values.email,
      password: values.password,
    })
    if (res.data) {
      const accessToken = res.data.access_token
      localStorage.setItem(ACCESS_TOKEN, accessToken)
      router.push({ name: routerName.userList })
    }
  } catch (error: any) {
    if (error.response) {
      const msg = error.response.data.error || 'Đã xảy ra lỗi'
      notification['error']({
        message: 'Đăng nhập thất bại',
        description: msg,
      })
    } else {
      notification['error']({
        message: 'Đăng nhập thất bại',
        description: 'Không thể kết nối đến máy chủ.',
      })
    }
  }
}

interface FormState {
  email: string
  password: string
}

const formState = reactive<FormState>({
  email: '',
  password: '',
})

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
const disabled = computed(() => {
  return !(formState.email && formState.password)
})
const handleRegister = () => {
  console.log('redirect to register page asdasdsaas')
}
</script>

<style lang="scss" scoped>
.login-page {
  background-color: #fff;
  width: 400px;
  height: 260px;
  border-radius: 20px;
  padding: 20px;
  position: absolute;
  top: calc(50%);
  left: calc(50%);
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
