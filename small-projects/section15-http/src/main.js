import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";

Vue.config.productionTip = false;

Vue.use(VueResource);

// $ is not required because here's "main.js"
Vue.http.options.root = "https://vuejs-http-44327.firebaseio.com/data.json";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
