<template>
    <h4>Posts</h4>
    <router-link v-for="post in testPosts" :to="`/posts/${post.id}`">
        {{post.title}}
    </router-link>
    <div><router-view /></div>
</template>

<script>
import { testPosts} from '../MicoBlog/testPosts.js'
export default {
    setup(){
        return{
            testPosts
        }
    }
   
}
</script>