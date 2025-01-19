import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout.vue'

const routes = [
  {
    name: 'auth',
    path: '/auth',
    redirect: { name: 'login' },
    component: AuthLayout,
    children: [
      {
        name: 'login',
        path: 'login',
        component: () => import('@/views/Auth/LoginPage.vue'),
      },
      {
        name: 'register',
        path: 'register',
        component: () => import('@/views/Auth/RegisterPage.vue'),
      },
    ],
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [
      {
        name: 'user-list',
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
