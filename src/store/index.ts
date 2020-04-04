import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const BASE_URL = process.env.VUE_APP_BASEURL;

export default new Vuex.Store({
  state: {
    products: [],
    loading: true
  },
  mutations: {
    SET_PRODUCTS(state, data) {
      state.products = data;
    },
    UPDATE_LOADING_STATE(state, flag) {
      state.loading = flag;
    }
  },
  actions: {
    loadProducts({ commit }) {
      axios
        .get(BASE_URL + "/products/")
        .then(r => r.data)
        .then(data => {
          commit("SET_PRODUCTS", data);
          commit("UPDATE_LOADING_STATE", false);
        });
    }
  },
  modules: {}
});
