<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" @select="onMenuSelect">
        <a-menu-item key="ui">
          <template #icon>
            <CommentOutlined />
          </template>
          <span>UI 组件</span>
        </a-menu-item>
        <a-menu-item key="hooks">
          <template #icon>
            <experiment-outlined />
          </template>
          <span>Hooks</span>
        </a-menu-item>
        <a-menu-item key="utils">
          <template #icon>
            <tool-outlined />
          </template>
          <span>Utils</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="padding: 0 24px; background: #fff">
        <h2>{{ pageTitle }}</h2>
      </a-layout-header>
      <a-layout-content style="margin: 24px 16px">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { CommentOutlined, ExperimentOutlined, ToolOutlined } from '@ant-design/icons-vue';

const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['ui']);
const router = useRouter();

const pageTitle = computed(() => {
  const titles: Record<string, string> = {
    ui: 'UI 组件展示',
    hooks: 'Hooks 示例',
    utils: '工具函数演示',
  };
  return titles[selectedKeys.value[0]] || '';
});

const onMenuSelect = ({ key }: { key: string }) => {
  router.push(`/${key}`);
};
</script>

<style scoped>
.logo {
  height: 32px;
  margin: 16px;
  background: rgb(255 255 255 / 30%);
}
</style>
