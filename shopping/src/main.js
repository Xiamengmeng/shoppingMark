// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import store from './store'
import axios from 'axios'
import qs from 'qs'

Vue.config.productionTip = false

Vue.use(Mint)
Vue.prototype.axios=axios
Vue.prototype.qs=qs
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
