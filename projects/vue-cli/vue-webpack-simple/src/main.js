import Vue from 'vue';
import App from './App.vue';
import Message from './components/Message.vue';

Vue.component('app-message', Message);

new Vue({
    el    : '#app',
    render: h => h(App)
});