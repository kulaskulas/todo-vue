<template>
 <router-view/>
</template>

<script>

import Login from './auth/Login.vue'
export default {
components : {
    Login
},

mounted () {
    let user_id = localStorage.getItem('user_logged_in')
    // this.$router.push({ name : 'dashboard'})
    // router.beforeEach((to, from, next) => {
    //     if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
    //     else next()
    // })
},

computed : {
    // checkIfHasUserLoggedIn () {
        
    // }
}
}
</script>