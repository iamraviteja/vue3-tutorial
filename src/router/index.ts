import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/section1' },
    {
      path: '/section1',
      name: 'Section1',
      component: () => import('@/views/Section1.vue'),
    },
    {
      path: '/section2',
      name: 'Section2',
      component: () => import('@/views/Section2.vue'),
    },
    {
      path: '/section3',
      name: 'Section3',
      component: () => import('@/views/Section3.vue'),
    },
    {
      path: '/section4',
      name: 'Section4',
      component: () => import('@/views/Section4.vue'),
    },
    {
      path: '/section5',
      name: 'Section5',
      component: () => import('@/views/Section5.vue'),
    },
  ],
})

export default router
