import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index';
import './assets/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import zh from './common/lang/zh';
import en from './common/lang/en';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: localStorage.getItem('user_lang') || 'en',
  messages: {
    'zh': zh,
    'en': en
  }
})


Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
