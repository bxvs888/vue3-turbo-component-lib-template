declare module 'vue' {
  export interface GlobalComponents {
    VButton: (typeof import('../components'))['VButton'];
    VModal: (typeof import('../components'))['VModal'];
  }
}
