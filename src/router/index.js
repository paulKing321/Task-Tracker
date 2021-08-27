import { createRouter, createWebHistory } from 'vue-router'
import Home from '../others/Home'
import About from '../others/About'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/About',
        name: 'About',
        component: About
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router