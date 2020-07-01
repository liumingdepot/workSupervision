import Vue from 'vue'
import App from './App'
import router from './router'
import api from './http'
import axios from './http/axios'
import VCharts from 'v-charts'
import i18n from './i18n'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import '@/assets/iconfont/iconfont.css'

//全局工具
import global from '@/utils/global'
import rules from '@/utils/rules'
import tool from '@/utils/tool'
Vue.prototype.global = global
Vue.prototype.$rules = rules
Vue.prototype.$tool = tool
Vue.prototype.$axios = axios
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  ak: 'AkwXKCU6AGVeUGyXf7CtgHShqiAB66do'
})

Vue.use(VCharts)
Vue.use(ElementUI)
Vue.use(api)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App)
});
