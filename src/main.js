import Vue from 'vue';
import store from "@/store/store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ru-RU';
import form from "@/form";

Vue.config.productionTip = true;
Vue.use(ElementUI, {locale});

new Vue({
    store : store,
    render: h => h(form),
}).$mount('#app');