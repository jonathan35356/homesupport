import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Importa el router

createApp(App)
  .use(router) // Registra el router
  .mount('#app')
