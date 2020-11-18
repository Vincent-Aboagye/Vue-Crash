<template>
   <div class="cards">
     <card 
     v-for="pokemon in pokemons" 
     @click="clicked(pokemon)"
     :class="{opace : selectedId && pokemon.id !== selectedId}"
     class="card">
       <template v-slot:title>
       {{pokemon.name}} #{{pokemon.id}}
       </template>
       <template v-slot:content>
         <img :src="pokemon.sprite" />
         </template>
         <template v-slot:description>
        <div v-for="types in pokemon.type">
           {{types}}
        </div>
         </template>
       </card>
     </div> 
</template>

<script>
import Card from './Card.vue'
export default {
    components: {
      Card
    },

    props: {
        selectedId: {
            type: Number
        },
        pokemons: {
            type: Array
        }
    },
    methods: {
        clicked(pokemons){
            this.$emit('pokemonClicked', pokemons )
            this.selectedId= pokemons.id
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
.opace{
  opacity: 0.5;
}
.card:hover{
   opacity: 1.0;
}
</style>