import Vue from 'vue';
import ROOT from './ROOT.vue';
import '../../../../_lib/new/bootstrap-4.3.1/css/bootstrap.min.css';

new Vue({
    el    : '#app',
    render: h => h(ROOT)
});