import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router/router.js';
import store from './store/store.js';
import dateFilter from './filters/date-filter.js'
import messagePlugin from './utils/message.plugin.js'
import './registerServiceWorker.js';
import 'materialize-css/dist/js/materialize.min.js'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.filter('dateFilter', dateFilter);

firebase.initializeApp({
  apiKey: "AIzaSyCiWwr69UUVFAeG6CgNy0wXzXGHHwaRbZU",
  authDomain: "vue-cli-crm.firebaseapp.com",
  databaseURL: "https://vue-cli-crm.firebaseio.com",
  projectId: "vue-cli-crm",
  storageBucket: "vue-cli-crm.appspot.com",
  messagingSenderId: "984886799976",
  appId: "1:984886799976:web:6c8eb737161597426355dd",
  measurementId: "G-PPWFRXX6W0"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});