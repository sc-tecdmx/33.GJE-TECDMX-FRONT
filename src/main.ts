/* ORIGINAL. import './assets/main.css' */

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App-jel.vue'
import router from './router'

//-- .\TECDMX
import { createHead } from '@unhead/vue'
const head = createHead()
import { plugin, defaultConfig } from '@formkit/vue'
//-- ./TECDMX

const app = createApp(App)
app.use(createPinia())
//--
//-- .\Cork
import * as bootstrap from 'bootstrap'
window.bootstrap = bootstrap
// TODO Corregir modal
// import '@/assets/tecdmx/sass/components/custom-modal.scss'

// perfect scrollbar

import appSetting from './config/app-layout-setting'
window.$appSetting = appSetting
window.$appSetting.init()
//-- ./Cork

app.use(router)
//-- .\TECDMX
app
  .use(head)
  //-- ./TECDMX
  //-- .\Cork

  //-- ./Cork
  .use(plugin, defaultConfig)
app.mount('#app')
