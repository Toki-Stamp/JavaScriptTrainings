import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth.js';
import userInfo from "./userInfo.js";
import category from './category.js';
import record from './record.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null
  },
  actions: {
    async fetchCurrency() {
      const key = process.env.VUE_APP_FIXER;
      const response = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=BYN,RUB,USD,EUR`);

      return response.json();
    }
  },
  mutations: {
    setError: (state, error) => state.error = error,
    clearError: (state) => state.error = null
  },
  getters: {
    error: state => state.error
  },
  modules: {
    auth,
    userInfo,
    category,
    record
  }
});
