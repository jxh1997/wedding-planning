import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index';
import axios from './utils/axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 公共样式
import "@/assets/style/base.css";

Vue.config.productionTip = false;
Vue.use(axios);
Vue.use(ElementUI);

// beforeEach 函数中to 是要去 的页面 from 是从哪里还. next 是要执行的操作
router.beforeEach((to, from, next ) => {
  if(to.meta.isAuthRequired && store.state.user.isLogin === false) {
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