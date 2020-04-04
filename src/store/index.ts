import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const BASE_URL = process.env.VUE_APP_BASEURL;

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS(state, data) {
      state.products = data;
    }
  },
  actions: {
    loadProducts({ commit }) {
      axios
        .get(BASE_URL + "/products/")
        .then(r => r.data)
        .then(data => {
          commit("SET_PRODUCTS", data);
        });
    }
  },
  modules: {}
});
