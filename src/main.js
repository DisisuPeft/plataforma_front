import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {pinia} from "./store/pinia.js";
import {router} from "./routes/index.js";

createApp(App).use(router).use(pinia).mount('#app')
