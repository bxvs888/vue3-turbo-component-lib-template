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
          component: () => import('@/views/Ui.vue')
        },
        {
          path: '/hooks',
          component: () => import('@/views/Hooks.vue')
        },
        {
          path: '/utils',
          component: () => import('@/views/Utils.vue')
        }
      ]
    }
  ]
});

export default router;
