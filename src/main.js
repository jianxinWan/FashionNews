import Vue from 'vue';
import App from './App';
import router from './router/index';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;

/* eslint-disable no-new */

Vue.use(Element);
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
