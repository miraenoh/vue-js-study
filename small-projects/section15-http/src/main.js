import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";

Vue.config.productionTip = false;

Vue.use(VueResource);

// $ is not required because here's "main.js"
Vue.http.options.root = "https://vuejs-http-44327.firebaseio.com/";
// Intercept a request and do something
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == "POST") {
    request.method = "PUT";
  }
  // intercepting response
  next((response) => {
    response.json = () => {
      return { messages: response.body };
    };
  });
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
