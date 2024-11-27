import type { App } from 'vue';
import { VButton, VDialog } from './components';

const components = [VButton, VDialog];

function install(app: App) {
  components.forEach((component) => {
    app.use(component);
  });
}

export { VButton, VDialog, install };

export default {
  install,
};
