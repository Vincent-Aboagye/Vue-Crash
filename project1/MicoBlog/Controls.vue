<template>
  <div>
  <button> {{post.likes}} </button>
  </div>
  <hash-tag v-for='tags in post.hashtags' :hashtag="tags" />
      
</template>


<script>
import HashTag from './HashTag.vue'
export default {
    components: {
        HashTag
    },
    props:{
        post:{
            type: Object
        }
    }
    
    
}
</script>
