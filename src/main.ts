import './assets/main.css'

import Vue from 'vue'
import App from './App.vue'
import Fragment from 'vue-fragment'

Vue.use(Fragment.Plugin)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
