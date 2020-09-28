import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/categories',
    name: 'Categories',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Categories')
  },
  {
    path: '/detail-record',
    name: 'DetailRecord',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/DetailRecord')
  },
  {
    path: '/history',
    name: 'History',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/History')
  },
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Home')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'auth'
    },
    component: () => import('../views/Login')
  },
  {
    path: '/planing',
    name: 'Planing',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Planning')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Profile')
  },
  {
    path: '/record',
    name: 'Record',
    meta: {
      layout: 'main'
    },
    component: () => import('../views/Record')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      layout: 'auth'
    },
    component: () => import('../views/Register')
  }
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;