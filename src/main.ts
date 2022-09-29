import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios' // C:\vuejs\myapp>npm install --save axios vue-axios
import VueAxios from 'vue-axios'
import PrimeVue from 'primevue/config';
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import ColumnGroup from "primevue/columngroup"; //optional for column grouping
import Row from "primevue/row"; //optional for row
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import { ref, onMounted } from "vue";
import './assets/main.css'


const app = createApp(App)

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(PrimeVue, {ripple: true});

app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("Button", Button);

app.mount('#app')
