import type { App } from 'vue';
import { VButton, VDialog } from './components';

const components = [VButton, VDialog];

function install(app: App) {
  components.forEach((component) => {
    app.use(component);
  });
}

export { install };

export * from './components';

export default {
  install,
};
