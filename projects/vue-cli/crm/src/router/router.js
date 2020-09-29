import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    name: 'Categories',
    path: '/categories',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Categories.vue')
  },
  {
    name: 'DetailRecord',
    path: '/detail-record',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/DetailRecord.vue')
  },
  {
    name: 'History',
    path: '/history',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/History.vue')
  },
  {
    name: 'Home',
    path: '/',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Home.vue')
  },
  {
    name: 'Login',
    path: '/login',
    meta: {
      layout: 'auth'
    },
    component: () => import('../views/Login.vue')
  },
  {
    name: 'Planning',
    path: '/planning',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Planning.vue')
  },
  {
    name: 'Profile',
    path: '/profile',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Profile.vue')
  },
  {
    name: 'Record',
    path: '/record',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Record.vue')
  },
  {
    name: 'Register',
    path: '/register',
    meta: {
      layout: 'auth'
    },
    component: () => import('../views/Register.vue')
  }
];

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});