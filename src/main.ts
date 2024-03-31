import "./assets/main.css";
import "@mdi/font/css/materialdesignicons.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";

// bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// router
import router from "./router";

// axios
import axios from "./plugins/axios";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

// axios
app.use(axios, {
  baseUrl: "https://cataas.com/",
});

app.mount("#app");








// filters
app.config.globalProperties.$filters = {
  currencydecimal(value: number) {
    return value.toFixed(2);
  }
};
