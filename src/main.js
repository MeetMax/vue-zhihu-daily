// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import vuex from 'vuex';
import axios from 'axios';
import routes from './router';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(axios);

const router = new VueRouter({
	mode: 'history',
  	routes
});
/* eslint-disable no-new */
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app');