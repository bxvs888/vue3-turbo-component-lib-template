// // For this project development
// import '@vue/runtime-core';

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    VButton: (typeof import('../components'))['VButton'];
    VDialog: (typeof import('../components'))['VDialog'];
  }
}
