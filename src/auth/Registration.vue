<template>
<div style="width:50%" class="center">
    <form @submit.prevent="register">
      <div class="text-center mb-3">
        <p>Sign up with:</p>
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button>
      </div>

      <p class="text-center">or:</p>

      <!-- Name input -->
      <!-- <div class="form-outline mb-4">
        <input type="text" id="registerName" class="form-control" />
        <label class="form-label" for="registerName">Name</label>
      </div> -->

      <!-- Username input -->
      <div class="form-outline mb-4">
        <input type="text" class="form-control" v-model="username" required/>
        <label class="form-label" for="registerUsername">Username</label>
      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <input type="password" id="registerPassword" class="form-control" v-model="password" required/>
        <label class="form-label" for="registerPassword">Password</label>
      </div>

      <!-- Repeat Password input -->
      <div class="form-outline mb-4">
        <input type="text" class="form-control" v-model="your_work"/>
        <label class="form-label" for="registerRepeatPassword">Your Work</label>
      </div>

      <!-- Checkbox -->
      <div class="form-check d-flex justify-content-center mb-4">
        <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
          aria-describedby="registerCheckHelpText" />
        <label class="form-check-label" for="registerCheck">
          I have read and agree to the terms
        </label>
      </div>

      <!-- Submit button -->
    <div class="d-flex bd-highlight mb-3">
        <div class="me-auto">
            <router-link to="/login">
                <a href="#" >Go to Login</a>
            </router-link>
        </div>
        
        <button type="submit" class="btn btn-primary btn-block mb-3">Register</button>
    </div>
      
    </form>
  </div>
<!-- <form @submit.prevent="register">
    <input type="text" placeholder="username" v-model="username">
    <input type="password" placeholder="password" v-model="password">
    <input type="text" placeholder="your work" v-model="your_work">
    <button type="submit">Register</button>

    <router-link to="/login">
            <a href="#">
                Back To Login
            </a>
        </router-link>
</form> -->
</template>
<script>
export default {
    
    data () {
        return {
            id : localStorage.getItem('users') !== null ? 
                 JSON.parse(localStorage.getItem('users')).at(-1).id+1 : 1 ,
            username : "",
            password : "",
            your_work : "",
        }
        
    },

    methods : {
        register () {
            let a = []
            let users = []
            let registered_users = localStorage.getItem('users')
            if (registered_users !== null) {
                JSON.parse(registered_users).forEach(function (key, item) {
                    a.push(key)// push exisiting users and new users to localstorage
                })
                if (!a.find(e => e.username === this.username)) { // check if the username already exist in object
                    a.push({'id' : this.id++,'username':this.username, 'password':this.password, 'work':this.your_work})
                    this.$router.push({name:'login'})
                } else {
                    alert("USER NAME ALREADY EXIST!")
                }
                
                localStorage.setItem('users', JSON.stringify(a))
            } else {
                users.push({'id' : this.id++,'username':this.username, 'password':this.password, 'work':this.your_work})
                localStorage.setItem('users', JSON.stringify(users))
                this.$router.push({name:'login'})
            }
        }
    }
}
</script>