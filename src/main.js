import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
// css
import './css/styles.css';
// font awesome
import '@fortawesome/fontawesome-free/css/all.css';

createApp(App)
.use(store)
.use(router)
.mount('#app');
