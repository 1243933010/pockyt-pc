import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './i18n';
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(i18n);
app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
