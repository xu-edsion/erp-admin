import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import install from "./install";
Vue.use(install)


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
