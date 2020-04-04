import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Filters from "vue2-filters";
import vSelect from "vue-select";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// Vue 3rd party components
Vue.component("v-select", vSelect);

// Vue libraries
Vue.use(Vue2Filters, {
  currency: {
    symbol: "€",
    decimalDigits: 4,
    spaceBetweenAmountAndSymbol: true
  },
  percent: {
    decimalDigits: 2
  }
});
