// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  {
    path: "/login",
    component: () => import ('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
      }
    ]
  },
  {
    path: "/signup",
    component: () => import ('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/signup',
        name: 'SignUp',
        component: () => import('@/views/SignUp.vue'),
      }
    ]
  },
  // {
  //   path: "/login",
  //   component: () => import('@/layouts/default/Default.vue'),
  //   children: [
  //     {
  //       path: '/login',
  //       name: 'Login',
  //       component: () => import('@/views/Login.vue'),
  //     },
  //   ],
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
