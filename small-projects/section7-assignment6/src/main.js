import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

// Global component importing
Vue.component('app-servers', Home);

new Vue({
  el: '#app',
  render: h => h(App)
})
