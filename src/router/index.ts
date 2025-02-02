import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout.vue'
import { routerName } from '@/constants/routerName'
const routes = [
  {
    name: 'auth',
    path: '/auth',
    redirect: { name: 'login' },
    component: AuthLayout,
    children: [
      {
        name: routerName.login,
        path: 'login',
        component: () => import('@/views/Auth/LoginPage.vue'),
      },
      {
        name: routerName.register,
        path: 'register',
        component: () => import('@/views/Auth/RegisterPage.vue'),
      },
      {
        name: routerName.forgot,
        path: 'forgot',
        component: () => import('@/views/Auth/ForgotPassword.vue'),
      },
    ],
  },
  {
    path: '/',
    name: routerName.home,
    redirect: { name: routerName.login },
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [
      {
        name: routerName.userList,
        path: 'user',
        component: () => import('@/views/User/UserPage.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
