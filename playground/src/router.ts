import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          redirect: '/ui'
        },
        {
          path: '/ui',
          component: () => import('@/views/UIDemo.vue')
        },
        {
          path: '/hooks',
          component: () => import('@/views/HooksDemo.vue')
        },
        {
          path: '/utils',
          component: () => import('@/views/UtilsDemo.vue')
        }
      ]
    }
  ]
});

export default router;
