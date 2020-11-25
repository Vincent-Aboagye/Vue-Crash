import {createApp} from 'vue';
import vuexApp from './vuex/App.vue';
import {store} from './vuex/store.js'


const app = createApp(vuexApp)
app.use(store)
app.mount('#app')

