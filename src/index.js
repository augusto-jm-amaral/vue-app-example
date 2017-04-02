import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '__dirname',
  routes: [
    { path: '/', component: App}
  ]
});

new Vue({
  router,
  template: '<router-view class="view"></router-view>'
  // el: '#app',
  // render: h => h(App)
}).$mount('#app');