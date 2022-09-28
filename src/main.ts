import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios' // C:\vuejs\myapp>npm install --save axios vue-axios
import VueAxios from 'vue-axios'
import PrimeVue from 'primevue/config';
import { ref, onMounted } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; //optional for column grouping
import Row from "primevue/row"; //optional for row
import './assets/main.css'


const app = createApp(App)

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(PrimeVue);

app.mount('#app')
