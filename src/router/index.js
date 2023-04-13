import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue';
import LayoutAuth from '../layouts/Auth';



const routes = [
  {
    path: '/login', component: LayoutAuth,
    children: [
        { path: '', name: 'login', component: Login },
    ],
},
]

const router = createRouter({
  history: createWebhHistory(),
  routes
})

export default router
