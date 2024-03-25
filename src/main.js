import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css";
import { router } from './router';
import store from './store/index.js';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
library.add(faHeart)

const app = createApp(App)
app.use(router)
app.use(store)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')

import "bootstrap/dist/js/bootstrap.js";

