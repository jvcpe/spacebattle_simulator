import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store/index';
import axios from './axios';

Vue.config.productionTip = false;

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
