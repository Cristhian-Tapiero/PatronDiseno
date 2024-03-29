import { createApp } from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import './assets/main.css'
import router from './router/router.js'

const app = createApp(App)

app.use(VueSweetalert2);

app.use(router)

app.mount('#app')
