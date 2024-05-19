import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "lib-flexible-computer";
import axios from 'axios'
import store from './store/index'

axios.defaults.baseURL = 'https://townapi.scery.com';
// axios.defaults.baseURL = 'http://127.0.0.1:10123';
createApp(App).use(store).use(ElementPlus).use(router).provide('$axios',axios).mount('#app')
