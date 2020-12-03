<template>
<div>
    <label for="search">Search Hashtag: #</label>
    <input type="text" :value="currentHashtag" @input="setHashtag"/>
    <div class="cards">
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
    </div>
    </div>
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

        const setHashtag = (evt) => {
            store.setHashtag(evt.target.value)
        }
        return{
            store,
            filterPost: store.filteredPosts,
            setHashtag,
            currentHashtag: computed(()=>store.state.currentHashtag)

        }
    }
    
}
</script>
<style scoped>
input {
  height: 30px;
  font-size: 18px;
  border: none;
  border-bottom: 1px solid grey;
  outline: none;
}

.cards {
  margin: 10px 0;
  display: flex;
}

.title {
  height: 40px;
}

.content {
  height: 150px;
}
</style>