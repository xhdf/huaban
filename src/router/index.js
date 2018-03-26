import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Discover from '@/components/discover'
import Login from '@/components/login'
import Search from '@/components/search'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'home',
        component: Home
    }, {
        path: '/discover',
        name: 'discover',
        component: Discover
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/search',
        name: 'search',
        component: Search
    }]
})
