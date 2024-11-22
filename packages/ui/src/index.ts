import type { App } from '@vue/runtime-core';
import { VButton } from './components';

const components = [VButton];

function install(app: App) {
  components.forEach((component) => {
    app.use(component);
  });
}

export { VButton, install };

export default {
  install,
};
