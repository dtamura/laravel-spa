import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '../components/Login'
import About from '../components/About'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/login', component: Login },
        { path: '/about', component: About },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
})
