
//////////////////////////////////////  [import]  //////////////////////////////////
// import "./assets/main.css";
import "@mdi/font/css/materialdesignicons.css";

import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";

//////////////////////////////////////  [import bootstrap]  //////////////////////////////////
// bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// router
import router from "./router";

// store
import store from "./store";

// axios
// import axios from "./plugins/axios";

// Vuetify
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";




// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { FontAwesomeIcon } from '@/plugins/font-awesome';

// 필요한 아이콘 라이브러리를 추가하세요
// import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

// 사용할 아이콘을 라이브러리에 추가하세요
// library.add(faUser, faEnvelope);




import setupInterceptors from './services/setupInterceptors';

setupInterceptors(store);


// import FontawesomeIcon from 'FontawesomeIcons';
//////////////////////////////////////  []  //////////////////////////////////
//////////////////////////////////////  []  //////////////////////////////////
//////////////////////////////////////  []  //////////////////////////////////
//////////////////////////////////////  [const]  //////////////////////////////////
const vuetify = createVuetify({
  components,
  directives,
});

//////////////////////////////////////  [createApp]  //////////////////////////////////
const app = createApp(App);

//////////////////////////////////////  [use]  //////////////////////////////////
//////////////////////////////////////  []  //////////////////////////////////
// pinia
app.use(createPinia());
// router
app.use(router);
// vuetify
app.use(vuetify);

// axios
// app.use(axios, {
//   // baseUrl: "https://cataas.com/",
// });

// store
app.use(store)


//////////////////////////////////////  [component]  //////////////////////////////////
app.component("font-awesome-icon", FontAwesomeIcon)


//////////////////////////////////////  [mount]  //////////////////////////////////
app.mount("#app");








// filters
app.config.globalProperties.$filters = {
  currencydecimal(value: number) {
    return value.toFixed(2);
  }
};
