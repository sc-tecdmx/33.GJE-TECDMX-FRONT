import { createApp } from "vue";
import { createPinia } from 'pinia'

import App from "./App.te.vue";
import router from "./router";


const pinia = createPinia()
const app = createApp(App);
app.use(pinia);

import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;

// perfect scrollbar
import PerfectScrollbar from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";

//vue-meta
import { createHead } from "@vueuse/head";
const head = createHead();

//-- ApiService from metronic
import ApiService from "@/services/ApiService";
ApiService.init(app);

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const options = {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674',
  };
app.use(VueSweetalert2, options);

// vue input mask
import Maska from "maska";

// smooth scroll
import { registerScrollSpy } from "vue3-scroll-spy/dist/index";
registerScrollSpy(app, { offset: 118 });

// datatables
import { ClientTable, EventBus } from "v-tables-3";

// json to excel
import vue3JsonExcel from "vue3-json-excel";

//vue-wizard
import VueFormWizard from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";

// set default settings
import appSetting from "./app-layout-setting";
window.$appSetting = appSetting; 
window.$appSetting.init();

app.directive("tooltip", (el) => {
  new Tooltip(el);
});

app.use(router)
    .use(PerfectScrollbar)
    .use(Maska)
    .use(EventBus)
    .use(ClientTable)
    .use(vue3JsonExcel)
    .use(VueFormWizard) 
    .use(head)
    .mount("#app");