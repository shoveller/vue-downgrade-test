import './assets/main.css'

import Vue from 'vue'
import App from './App.vue'
import Fragment from 'vue-fragment'
import { createPinia } from 'pinia'

Vue.use(Fragment.Plugin)

new Vue({
  pinia: createPinia(),
  render: (h) => h(App)
}).$mount('#app')
