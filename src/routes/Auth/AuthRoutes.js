
export const AuthRoutes = [
    {
        path: '/dashboard',
        component: () => import('../../Pages/Auth/Dashboard.vue'),
        meta: {
            requiresAuth: true
        }
    }
]