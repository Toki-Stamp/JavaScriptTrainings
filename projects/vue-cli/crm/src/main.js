import Vue from 'vue';
import Vuelidate from 'vuelidate';
import Paginate from 'vuejs-paginate';
import VueMeta from 'vue-meta';
import App from './App.vue';
import Loader from './components/app/Loader.vue';
import router from './router/router.js';
import store from './store/index.js';
import dateFilter from './filters/date-filter.js';
import currencyFilter from './filters/currency-filter.js';
import localizeFilter from './filters/localize-filter.js';
import tooltipDirective from './directives/tooltip-directive.js';
import messagePlugin from './plugins/message-plugin.js';
import titlePlugin from './plugins/title-plugin.js';
import './registerServiceWorker.js';
import 'materialize-css/dist/js/materialize.min.js'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.use(titlePlugin);
Vue.use(VueMeta, {refreshOnceOnNavigation: true});
Vue.filter('dateFilter', dateFilter);
Vue.filter('currencyFilter', currencyFilter);
Vue.filter('localizeFilter', localizeFilter);
Vue.directive('tooltip', tooltipDirective);
Vue.component('Loader', Loader);
Vue.component('Paginate', Paginate);

const firebaseConfig = {
  apiKey: "AIzaSyCiWwr69UUVFAeG6CgNy0wXzXGHHwaRbZU",
  authDomain: "vue-cli-crm.firebaseapp.com",
  databaseURL: "https://vue-cli-crm.firebaseio.com",
  projectId: "vue-cli-crm",
  storageBucket: "vue-cli-crm.appspot.com",
  messagingSenderId: "984886799976",
  appId: "1:984886799976:web:6c8eb737161597426355dd",
  measurementId: "G-PPWFRXX6W0"
};
let application;

firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(() => {
  if (!application) {
    application = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});

/*
*
* https://console.firebase.google.com/u/0/project/vue-cli-crm/database/vue-cli-crm/data/~2Fusers
* https://fixer.io/quickstart
* https://materializecss.com/getting-started.html
* https://www.chartjs.org/docs/latest/getting-started/
* https://github.com/nuxt/vue-meta
*
*/