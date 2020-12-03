<template>
    <div>
       Count: {{count}} 
       <button @click="increment"> Increment </button>
    </div>
</template>

<script>
export default {
    methods:{
        increment(){
            this.$store.commit('increment')
        }
    },
    computed: {
        count() {
            return this.$store.state.count
        }
    }
}
</script>