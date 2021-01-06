import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'

import Dashboard from './components/Dashboard'
import TargetWallet from './components/TargetWallet'
import Rebalancing from './components/Rebalancing' 
import Contribution from './components/Contribution'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    { path: '/login', component: Login},
    { path: '/register', component: Register},
    { path: '/', component:Dashboard, meta: {requiresAuth: true}},
    { path: '/contribution', component:Contribution, meta: {requiresAuth: true}},
    { path: '/targetWallet', component:TargetWallet, meta: {requiresAuth: true}},
    { path: '/rebalancing', component:Rebalancing, meta: {requiresAuth: true}},
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router

