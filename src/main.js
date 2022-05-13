import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/scss/bootstrap.scss'

/* Bootstrap */
const bootstrap = require('bootstrap')
Vue.use(bootstrap)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
