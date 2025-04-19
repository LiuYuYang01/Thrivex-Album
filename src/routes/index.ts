import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Cate',
    component: () => import('../pages/cate/index.vue')
  },
  {
    path: '/photo',
    name: 'Photo',
    component: () => import('../pages/photo/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 