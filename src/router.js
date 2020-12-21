import Vue from 'vue'
import Router from 'vue-router'

import MyWallet from './components/MyWallet'
import TargetWallet from './components/TargetWallet'
import Updates from './components/Updates' 

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/myWallet', component:MyWallet},
        { path: '/targetWallet', component:TargetWallet},
        { path: '/updates', component:Updates},
    ]
})
