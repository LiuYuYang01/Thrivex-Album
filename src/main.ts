import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import 'boxicons';
import router from './routes'

const app = createApp(App)
app.use(router)
app.mount('#app')
