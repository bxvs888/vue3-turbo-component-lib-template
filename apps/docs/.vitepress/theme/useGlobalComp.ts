import { App } from 'vue';
// 如果报：“找不到模块“@mylib/ui”或其相应的类型声明”的错误，记得先build打包一下
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
