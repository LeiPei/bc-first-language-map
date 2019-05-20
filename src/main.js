import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import './filters'

// bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// css
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.js'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css'
window.$ = window.jQuery = require('jquery')

Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
