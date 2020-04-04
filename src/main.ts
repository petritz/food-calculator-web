import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Filters from "vue2-filters";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// Vue libraries
const Vue2FiltersConfig = {
  currency: {
    symbol: "€",
    decimalDigits: 4,
    spaceBetweenAmountAndSymbol: true
  },
  percent: {
    decimalDigits: 2
  }
};

Vue.use(Vue2Filters, Vue2FiltersConfig);
