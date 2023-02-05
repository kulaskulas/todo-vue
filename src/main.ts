import { createApp } from 'vue'
import router from './routes/router.js'
import vuex from './store/index.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import App from './App.vue'
import Main from './Main.vue'

// import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

// createApp(App).mount('#app')
createApp(Main)
.use(router)
.use(vuex)
.use(VueAxios, axios)
.mount('#app')
