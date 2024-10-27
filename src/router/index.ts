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
    // New routes for optimization techniques
    {
      path: '/environment-variables',
      name: 'environmentVariables',
      component: () => import('@/views/EnvironmentVariables.vue'),
    },
    {
      path: '/debouncing',
      name: 'debouncing',
      component: () => import('@/views/Debouncing.vue'),
    },
    {
      path: '/aborting-requests',
      name: 'abortingRequests',
      component: () => import('@/views/AbortingRequests.vue'),
    },
    {
      path: '/axios-interceptors',
      name: 'axiosInterceptors',
      component: () => import('@/views/AxiosInterceptors.vue'),
    },
    {
      path: '/using-v-memo',
      name: 'usingVMemo',
      component: () => import('@/views/UsingVMemo.vue'),
    },
    {
      path: '/using-keep-alive',
      name: 'usingKeepAlive',
      component: () => import('@/views/UsingKeepAlive.vue'),
    },
    {
      path: '/async-components',
      name: 'asyncComponents',
      component: () => import('@/views/AsyncComponents.vue'),
    },
    {
      path: '/lazy-loading-images',
      name: 'lazyLoadingImages',
      component: () => import('@/views/LazyLoadingImages.vue'),
    },
  ],
})

export default router
