import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import Arco from '@arco-design/web-vue'

const app = createApp(App)

app.use(Arco).use(router)

app.mount('#app')

