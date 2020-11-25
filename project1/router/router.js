import {createRouter, createWebHistory} from 'vue-router';
import Hello from './Hello.vue';
import Posts from './Posts.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'hello',
            path: '/hello',
            component: Hello
        },
        {
            name: 'posts',
            path: '/posts',
            component: Posts
        }
    ]
})