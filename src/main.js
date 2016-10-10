import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import store from './store/store'
import {  teacherUrl,loginUrl ,userUrl, getHeader } from './config'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    components: {
      login: require('./components/users/Login.vue')
    },
    name: 'login'
  },{
    path: '/painel',
    component: require('./components/users/Main.vue'),
    name: 'dashboard',
    children: [
      {
        path: '/projetos',
        component: require('./components/users/Projects.vue'),
        name: 'projetos'
      },
      {
        path: '/orientadores',
        component: require('./components/users/Teachers.vue'),
        name: 'orientadores',
      }
    ]
  },{
    path: '*',
    redirect: '/'
  }]
})

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
