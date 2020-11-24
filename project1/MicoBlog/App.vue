<template>
    <card v-for="post in filterPost">
        <template v-slot:title>
       {{post.title}}
       </template>
       <template v-slot:content>
         {{post.content}}
         </template>
         <template v-slot:description>
             <Controls :post="post"/>
         </template>
    </card>
</template>


<script>
import { ref, computed } from 'vue'
import { store }  from './store'
import Card from '../pokemon/Card.vue'
import Controls from './Controls.vue'
export default {
    components: {
        Card,
        Controls
    },
    setup(){

        const filterPost = computed(()=>{
            if(!store.state.currentHashtag){
                    return store.state.post
                }
            return store.state.post.filter(post => 
            post.hashtags.includes(store.state.currentHashtag))
        })
        return{
            store,
            filterPost

        }
    }
    
}
</script>
