import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Axios from 'axios'
import router from './router';
Vue.config.productionTip = false;
Vue.prototype.$http = Axios;



new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
