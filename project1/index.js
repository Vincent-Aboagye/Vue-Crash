import {createApp} from 'vue';
import App from './photos/App.vue';
import { store } from './photos/store'

const app = createApp(App)
app.use(store)
app.mount('#app')