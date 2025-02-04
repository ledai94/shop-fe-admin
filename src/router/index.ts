import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout.vue'
import { routerName } from '@/constants/routerName'
import { ACCESS_TOKEN } from '@/constants/localStorage'
import { ROLE } from '@/constants/common'
const routes = [
  {
    name: 'auth',
    path: '/auth',
    redirect: { name: routerName.login },
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
    // redirect: { name: routerName.userList },
    meta: { requiresAuth: true },
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [
      {
        name: routerName.userList,
        path: 'user',
        component: () => import('@/views/User/UserPage.vue'),
        meta: { requiresAuth: true, role: ROLE.ADMIN },
      },
      {
        name: routerName.productList,
        path: 'product',
        component: () => import('@/views/Product/ProductList.vue'),
        meta: { requiresAuth: true, role: ROLE.USER },
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

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem(ACCESS_TOKEN)
  // nếu chưa login thì back về trang login
  if (!isAuthenticated && to.meta.requiresAuth) {
    next('/auth/login')
  }
  // nếu login rồi thì chuyển hướng đến trang home
  if (isAuthenticated && !to.meta.requiresAuth) {
    next('/')
  }
  // bảo vệ 1 số trang với quyền admin
  // if (isAuthenticated && to.meta.role && to.meta.role == ROLE.ADMIN) {
  //   next('/')
  // }
  else {
    next()
  }
})
export default router
