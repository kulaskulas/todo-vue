<template>
    <form @submit.prevent="login">
        <input type="text" v-model="username">
        <input type="text" v-model="password">
        <button>Login</button>
    </form>
</template>

<script>
export default {
    data () {
        return {
            username : "",
            password : ""
        }
    },

    methods : {
        login () {
            const all_users = localStorage.getItem('users')
            console.log(all_users)
            console.log(this.username)
        }
    }
}
</script>