import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
const srchTest = "wowggang";
console.log(srchTest);
new Vue({
  render: h => h(App)
}).$mount("#app");
