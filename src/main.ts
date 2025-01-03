// import '@/assets/bootstrap-5.3.3/bootstrap-5.3.3/dist/css/bootstrap.min.css'
// import '@/assets/bootstrap-5.3.3/bootstrap-5.3.3/dist/js/bootstrap.min.js'
import '@/assets/dist/css/bootstrap.min.css'
import '@/assets/dist/js/bootstrap.min.js'
import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)
// app.use(ElementPlus)
app.mount('#app')
