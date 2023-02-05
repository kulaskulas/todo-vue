import { createWebHistory, createRouter } from "vue-router";
import auth from '../middleware/middleware.js'
const routes = [
    {
        path : '/',
		name: 'registration',
		component: () => import('../auth/Registration.vue')
    },
    {
        path : '/registration',
		name: 'registration',
		component: () => import('../auth/Registration.vue'),
        // meta : {
        //     middleware : auth,
        // }
        beforeEnter: (to, from) => {
            if (localStorage.getItem('user_logged_in') == null) {
                return true
            } else {
                router.push({ name: 'dashboard' })
            }
        },
    },

    {
        path : '/login',
		name: 'login',
		component: () => import('../auth/Login.vue'),
        // meta : {
        //     middleware : auth,
        // }
        beforeEnter: (to, from) => {
            if (localStorage.getItem('user_logged_in') == null) {
                return true
            } else {
                router.push({ name: 'dashboard' })
            }
        },
    },

    {
        path : '/dashboard',
		name: 'dashboard',
		component: () => import('../pages/Dashboard.vue'),
        beforeEnter: (to, from) => {
            if (localStorage.getItem('user_logged_in') == null) {
                router.push({ name: 'login' })
            } else {
                return true
            }
        },
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// router.beforeEach((to, from, next) => {
//     if (localStorage.getItem('user_logged_in') == null) {
//         next({path : '/login'})
//     } else {
//         // alert("false")
//         next()
//         // router.push({ name: 'dashboard' })
//     }
// })
  
export default router


//   router.beforeEach((to, from, next) => {
//     if (localStorage.getItem('user_logged_in') == null) {
//         next({path : '/login'})
//     } else {
//         // alert("false")
//         next()
//         // router.push({ name: 'dashboard' })
//     }
//   })