<template>
     <div>
     <pokemon-card 
     @pokemonClicked="fetchEvolutions"
     :pokemons="starters"
     :selectedId="selectId" />
       <pokemon-card :pokemons="evolutions" />
       </div>
</template>

<script>
import Card from './Card.vue'
import PokemonCard from './PokemonCard.vue'
const api = "https://pokeapi.co/api/v2/pokemon"
const STARTERIDS= [1, 4, 7]

export default {
    components: {
      PokemonCard
    },
    async created(){
        const starter = await this.fetchData(STARTERIDS)
        this.starters = starter
    },
    data(){
       return{
    starters: [],
    evolutions: [],
    selectId: null
       } 
    },
    methods: {
        async fetchEvolutions(pokemon){
          this.evolutions = await this.fetchData([pokemon.id+1, pokemon.id+2])
          this.selectId = pokemon.id
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



</style>