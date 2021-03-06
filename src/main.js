import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import vuetify from './plugins/vuetify'

import 'commsware-styles/css/fonts.scss'
import 'commsware-styles/css/variables.scss'

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
