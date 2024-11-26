import type { App } from '@vue/runtime-core';
import { VButton, VModal } from './components';

const components = [VButton, VModal];

function install(app: App) {
  components.forEach((component) => {
    app.use(component);
  });
}

export { VButton, VModal, install };

export default {
  install,
};
