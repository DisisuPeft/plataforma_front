import {createRouter, createWebHistory} from "vue-router";
import {GuestRoutes} from "./GuestRoutes.js";
import {AuthRoutes} from "./Auth/AuthRoutes.js";
import {useAuthStore} from "../store/authStore.js";


const routes = [
    ...GuestRoutes,
    ...AuthRoutes,
]
export const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth){
        const authStore = useAuthStore()
        const auth = authStore.isAuthenticated
        if (auth){
            next();
        }else{
            next('/')
        }
    }else {
        next()
    }
})
