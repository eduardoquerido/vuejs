import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";

axios.interceptors.request.use(config => {
  if(store.state.token) {
    config.headers.Authorization = store.state.token
  }
  return config
})
axios.interceptors.response.use(res => {
    return res
  }, error => {
    if(error.response.status === 403) {
      alert('Não autorizado!')
      router.push('/login')
    }
    else if (error.response.status === 401) {
      store.commit('logout')
      router.push('/login')
    }
    throw error
})

axios.defaults.baseURL =
  "https://8081-yellow-blackbird-6m8b3k7n.ws-us17.gitpod.io/api";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
