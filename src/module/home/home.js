// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


import VueLazyload from 'vue-lazyload'

// Vue.use(VueLazyload)


Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'http://cdn.uehtml.com/201402/1392662587108.gif',
  // loading: 'http://cdn.uehtml.com/201402/1392662587108.gif',
  listenEvents: ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove', 'refresh'],
  attempt: 1,
  // lazyComponent: true
})

// //页面全局引入css
import 'assets/less/reset.css';

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
