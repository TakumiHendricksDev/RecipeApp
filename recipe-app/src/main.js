import { createApp } from 'vue'
import {createPinia} from 'pinia';
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import CreateView from './views/CreateView.vue'
import DetailView from './views/DetailView.vue'
import EditView from './views/EditView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'About',
            component: AboutView
        },
        {
            path: '/create',
            name: 'Create Recipe',
            component: CreateView
        },
        {
            path: '/recipe/:url',
            name: 'Detail',
            component: DetailView,
        },
        {
            path: '/edit/:url',
            name: 'Edit',
            component: EditView,
        }
    ]
})

createApp(App)
.use(router)
.use(createPinia())
.mount('#app')
