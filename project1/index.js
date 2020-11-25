import {createApp} from 'vue';
import routerApp from './router/App.vue';
import { router } from './router/router.js'


const app = createApp(routerApp)
app.use(router)
app.mount('#app')

