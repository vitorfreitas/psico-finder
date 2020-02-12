import Vue from "vue";
import firebase from "firebase";
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

firebase.initializeApp({
  apiKey: "AIzaSyBSQUZOpXejUCiLA5zrAF_2TGm34SRNeTg",
  authDomain: "psico-finder-1558841716013.firebaseapp.com",
  databaseURL: "https://psico-finder-1558841716013.firebaseio.com",
  projectId: "psico-finder-1558841716013",
  storageBucket: "psico-finder-1558841716013.appspot.com",
  messagingSenderId: "408135215741",
  appId: "1:408135215741:web:97614321aede624c"
});

new Vue({
  render: h => h(App)
}).$mount("#app");
