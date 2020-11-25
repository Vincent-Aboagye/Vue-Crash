<template>
  <div class="like" >
  <button @click="likes"> like </button>
  <div>{{post.likes}}</div>
  </div>
  <hash-tag v-for='tags in post.hashtags' :hashtag="tags" />
      
</template>


<script>
import HashTag from './HashTag.vue'
import { store } from './store'
export default {
    components: {
        HashTag
    },
    props:{
        post:{
            type: Object
        }
    },

    setup(props){
        const likes = () => {
            store.incrementLike(props.post)
        }
        return {
            likes
        }
    }
    
    
}
</script>

<style scoped>
    .like {
        display: flex;
        justify-content: center;
        margin: 10px;
    }
</style>