import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import {
  CommentOutlined,
  ExperimentOutlined,
  ToolOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/ui',
    name: 'UI',
    meta: {
      title: 'UI 组件',
      icon: CommentOutlined,
    },
    component: () => import('@/views/Ui.vue'),
  },
  {
    path: '/hooks',
    name: 'Hooks',
    meta: {
      title: 'Hooks',
      icon: ExperimentOutlined,
    },
    component: () => import('@/views/Hooks.vue'),
  },
  {
    path: '/directives',
    name: 'Directives',
    meta: {
      title: 'Directives',
      icon: SettingOutlined,
    },
    component: () => import('@/views/Directives.vue'),
  },
  {
    path: '/utils',
    name: 'Utils',
    meta: {
      title: 'Utils',
      icon: ToolOutlined,
    },
    component: () => import('@/views/Utils.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [...routes],
    },
  ],
});

export default router;
