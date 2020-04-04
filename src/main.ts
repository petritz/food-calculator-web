import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// Vue Filters (globally)

Vue.filter("toCurrency", function(value: number) {
  if (!value) {
    return "";
  }
  const formatter = new Intl.NumberFormat("de-AT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 4
  });

  return formatter.format(value);
});
