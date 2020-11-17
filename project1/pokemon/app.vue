<template>
   <div class="card" v-for="starter in starters">
       <div class="title">
           {{starter.name}}
       </div>
       <div class="content">

       </div>
       <div class="description">

       </div>
   </div>
</template>

<script>
const api = "https://pokeapi.co/api/v2/pokemon";
const ids = [1, 4, 7];

export default {
    created(){
        this.fetchapi()
    },
    data(){
       return{
    pokemon: null,
    starters: []
       } 
    },
    methods: {
        async fetchapi(){
            const responses = await Promise.all(ids.map(id=>window.fetch(`${api}/${id}`))) 
            const data = await Promise.all(responses.map(res=>res.json()))
            this.starters = data.map(data=> ({
                name: data.name,
                sprite: data.sprites.other['official-artwork'].font_default,
                type: data.types.map(type=> ({name: type.type.name}))
                })

        }
    }
    
}
</script>

<style scoped>
.card {
  border: 1px solid silver;
  border-radius: 8px;
  max-width: 200px;
  margin: 0 5px;
  cursor: pointer;
  box-shadow: 0px 1px 3px darkgrey;
  transition: 0.2s;
}

.title, .content, .description {
  padding: 16px;
  text-transform: capitalize;
  text-align: center;
}

.title, .content {
  border-bottom: 1px solid silver;
}

.title {
  font-size: 1.25em;
}

.card:hover {
  transition: 0.2s;
  box-shadow: 0px 1px 9px darkgrey;
}
</style>