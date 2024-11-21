declare module 'vue' {
  export interface GlobalComponents {
    VButton: (typeof import('../components/Button'))['VButton'];
  }
}
