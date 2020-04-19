// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "./router"
import store from "./store"
import VueLazyload from "vue-lazyload"
import axios from "./utils/http"

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require("@/assets/loading.png"),
  loading: require("@/assets/loading.png"),
  attempt: 1
})
Vue.http = Vue.prototype.$http = axios
// Vue.use(Base)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  document.title = to.meta.title
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})