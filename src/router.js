import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from './components/Dashboard'
import MyWallet from './components/MyWallet'
import TargetWallet from './components/TargetWallet'
import Rebalancing from './components/Rebalancing' 
import Contribution from './components/Contribution'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/yieldme-front', component:Dashboard},
        { path: '/myWallet', component:MyWallet},
        { path: '/contribution', component:Contribution},
        { path: '/targetWallet', component:TargetWallet},
        { path: '/rebalancing', component:Rebalancing},
    ]
})
