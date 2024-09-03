import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "lib-flexible-computer";
import axios from 'axios'
import store from './store/index'
import i18n from './i18n'
import { Chart } from '@antv/g2';
// import login from './components/login/login.vue'

axios.defaults.baseURL = 'https://townapi.scery.com';
// axios.defaults.baseURL = 'http://127.0.0.1:10123';
createApp(App).use(store).use(ElementPlus).use(router).use(i18n).use({ Chart }).provide('$axios', axios).mount('#app')
