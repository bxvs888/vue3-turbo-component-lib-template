import type { App, Component } from 'vue';

export type WithInstall<T> = T & {
  install(app: App): void;
};

export function withInstall<T extends Component>(component: T) {
  const comp = component as WithInstall<T>;

  comp.install = function (app: App) {
    app.component(comp.name!, comp);
  };

  return comp;
}
