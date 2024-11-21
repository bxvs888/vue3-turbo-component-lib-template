declare module '@vue3-lib/ui' {
  import { Component } from 'vue';

  export const Button: Component;
  // 导出其他组件...

  const components: Record<string, Component>;
  export default components;
}
