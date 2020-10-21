import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router/router.js';
import store from './store/store.js';
import dateFilter from './filters/date-filter.js'
import messagePlugin from './utils/message.plugin.js'
import './registerServiceWorker.js';
import 'materialize-css/dist/js/materialize.min.js'

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.filter('dateFilter', dateFilter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
