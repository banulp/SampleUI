import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios'

const app = createApp(App)

app.config.globalProperties.$axios = axios; 
// app.use(axios, {
//     baseURL: 'http://localhost:8080'
// })
// // https://kkh0977.tistory.com/1958
// // https://blog.logrocket.com/how-use-axios-vue-js/

app.mount('#app')
