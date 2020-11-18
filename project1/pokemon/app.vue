<template>
     <div class="cards">
     <card v-for="starter in starters" @click="fetchEvolutions(starter)">
       <template v-slot:title>
       {{starter.name}}
       </template>
       <template v-slot:content>
         <img :src="starter.sprite" />
         </template>
         <template v-slot:description>
        <div v-for="types in starter.type">
           {{types}}
        </div>
         </template>
       </card>
     </div>
       <div class="cards">
       <card v-for="evolution in evolutions">
       <template v-slot:title>
       {{evolution.name}}
       </template>
       <template v-slot:content>
         <img :src="evolution.sprite" />
         </template>
         <template v-slot:description>
        <div v-for="types in evolution.type">
           {{types}}
        </div>
         </template>
       </card>
       </div>

   
</template>

<script>
import Card from './Card.vue'
const api = "https://pokeapi.co/api/v2/pokemon"
const STARTERIDS= [1, 4, 7]

export default {
    components: {
      Card
    },
    async created(){
        const starters = await this.fetchData(STARTERIDS)
        this.starters = starters
    },
    data(){
       return{
    starters: [],
    evolutions: []
       } 
    },
    methods: {
        async fetchEvolutions(pokemon){
          this.evolutions = await this.fetchData([pokemon.id+1, pokemon.id+2])
          console.log(evolutions)
        },
        async fetchData(ids){
            const responses = await Promise.all(ids.map(id=>window.fetch(`${api}/${id}`))) 
            const data = await Promise.all(responses.map(res=>res.json()))
           return data.map(dat=> ({
                id: dat.id,
                name: dat.name,
                sprite: dat.sprites.other['official-artwork'].front_default,
                type: dat.types.map(type=> (type.type.name))
                })
            )
    }
    }
    
}
</script>

<style scoped>

.cards{
  display: flex;
}
img {
  width: 100%;
}
</style>