// // For this project development
// import '@vue/runtime-core';

/**
 * 给全局引入的UI组件类型提示：
 * tsconfig.json需要添加以下配置：
 * "types": ["vite/client", "@mylib/ui/global.d.ts"]
 */
declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    VButton: (typeof import('@mylib/ui'))['VButton'];
    VDialog: (typeof import('@mylib/ui'))['VDialog'];
  }
}

export {};
