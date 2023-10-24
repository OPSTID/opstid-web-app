import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* CSS for Markdown */
import "github-markdown-css/github-markdown.css"

/* Theme variables */
import '@/theme/variables.css';

/* Import Customized CSS */
import "@/theme/app.css"
import "@/theme/animation.css"

/* Import Custom lib */
import ionToolbarResponsive from './lib/ion-toolbar-responsive';

const app = createApp(App)
  .use(IonicVue, {
    mode: "ios"
  })
  .use(router)
  
router.isReady().then(() => {
  setTimeout(() => {
    app.mount('#app');
  },800)
});

// run ion toolbar responsive
ionToolbarResponsive()