import type { App } from 'vue';
import { Button } from './components';

export { Button };

export default {
  install: (app: App) => {
    app.component('VButton', Button);
  }
};
