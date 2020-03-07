import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/themes/prism.css'
import Prism from 'prismjs';
import 'prismjs/components/prism-java';
Object.defineProperty(Vue.prototype, '$prism', { value: Prism });

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render:h => h(App)
})
