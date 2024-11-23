import { App } from 'vue';
import * as UI from '@mylib/ui';

export function useGlobalComp(app: App) {
  // 注册 UI 组件
  Object.entries(UI).forEach(([key, component]) => {
    if (key !== 'default') {
      app.component(key, component);
    }
  });

  // 注册 其他 组件
  // app.component('Demo', Demo);
}
