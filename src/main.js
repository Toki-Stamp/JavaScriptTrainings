import Vue from 'vue';
import store from "./store/store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ru-RU';
import App from './app.vue';

Vue.config.productionTip = true;
Vue.use(ElementUI, {locale});

new Vue({
    store : store,
    render: h => h(App),
}).$mount('#app');