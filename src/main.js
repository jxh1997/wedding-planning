import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index';
// import axios from './utils/axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 公共样式
import "@/assets/style/base.css";

Vue.config.productionTip = false;

Vue.use(ElementUI);
// Vue.use(Axios);

// 解决跨域：1. 配置BaseUrl
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/test'  //关键代码
Vue.config.productionTip = false


// beforeEach 函数中to 是要去 的页面 from 是从哪里还. next 是要执行的操作
router.beforeEach((to, from, next ) => {
  if(to.meta.isAuthRequired && store.state.isLogin === false) {
    return next('/signin')
  } else {
    next()
  }
})


new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')