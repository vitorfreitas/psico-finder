import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB6wx8Fg4mgLQiMMVYPRXVo14GAni5nS3E",
    libraries: "places",
    language: "pt"
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
