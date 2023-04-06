import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import {useTimeStore} from "@/stores/TimeStore";
const pinia = createPinia()
const app =  createApp(App);
app.use(pinia);
export const timeStore = useTimeStore()
app.mount('#app')




