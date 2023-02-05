<template>
    <div style="width:50%" class="center">
        <!-- <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
      aria-controls="pills-login" aria-selected="true">Login</a>
  </li>
  <li class="nav-item" role="presentation">
    <router-link to="/registration">
        <a href="#" class="nav-link" role="tab">
            Registration
        </a>
    </router-link>
  </li>
</ul> -->
<!-- Pills navs -->

<!-- Pills content -->
    <form @submit.prevent="login">
      <div class="text-center mb-3">
        <p>Sign in with:</p>
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

      <!-- Email input -->
      <div class="form-outline mb-4">
        <input type="text" id="loginName" class="form-control" v-model="username" required/>
        <label class="form-label" for="loginName">username</label>
      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <input type="password" id="loginPassword" class="form-control" v-model="password" required/>
        <label class="form-label" for="loginPassword">Password</label>
      </div>

      <!-- 2 column grid layout -->
      <div class="row mb-4">
        <div class="col-md-6 d-flex justify-content-center">
          <!-- Checkbox -->
          <div class="form-check mb-3 mb-md-0">
            <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
            <label class="form-check-label" for="loginCheck"> Remember me </label>
          </div>
        </div>

        <div class="col-md-6 d-flex justify-content-center">
          <!-- Simple link -->
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      <!-- Register buttons -->
        <div class="d-flex bd-highlight mb-3">
            <div class="me-auto">
                <p>Not a member? 
                    <router-link to="/registration">
                        <a href="#">
                            Registration
                        </a>
                    </router-link>
                </p>
            </div>
            <button type="submit" class="btn btn-primary btn-block mb-3">Login</button>
        </div>
    </form>
</div>
    <!-- Pills navs -->

<!-- Pills content -->
    <!-- <form @submit.prevent="login">
        <input type="text" v-model="username" required>
        <input type="password" v-model="password" required>
        <button>Login</button>
        <router-link to="/registration">
            <a href="#">
                Registration
            </a>
        </router-link>
    </form> -->
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
            let user_id;
            if (JSON.parse(all_users) !== null && JSON.parse(all_users).find(e => e.username === this.username)) {
                if (JSON.parse(all_users).find(e => e.username === this.username) && 
                    JSON.parse(all_users).find(e => e.password === this.password)) {
                        let data = JSON.parse(all_users).find(e => e.username === this.username)
                        localStorage.setItem('user_logged_in', data.id)
                        location.reload
                        this.$router.push({name : 'dashboard'})
                        window.location.href = '/dashboard'
                    } else {
                    
                    alert("CREDENTIAL NOT MATCH")
                }
            } else {
                alert("NO ACCOUNT IN OUR DATA!")
            }
        }
    }
}
</script>