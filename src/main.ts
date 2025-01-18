import '@/assets/bootstrap5.3/css/bootstrap-grid.min.css'
// import '@/assets/bootstrap5.3/js/bootstrap.min.js'

import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css'

const app = createApp(App)
app.use(Antd)
app.mount('#app')
