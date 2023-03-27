import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import MainLayout from './layout/MainLayout'
import LogoLayout from './layout/LogoLayout'

createApp(App)
  .component('main-layout', MainLayout)
  .component('logo-layout', LogoLayout)
  .use(store)
  .use(router)
  .mount('#app')
