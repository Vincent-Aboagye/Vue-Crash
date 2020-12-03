<template>
    <Layout>
    <template v-slot:header>
        Header
    </template>
    <template v-slot:sidebar>
        <Album v-for="album in albums"
        :album="album"/>
    </template>
    <template v-slot:content>
    </template>
    </Layout>
</template>

<script>
import Album from './Album.vue'
import Layout from './Layout.vue'
export default {
    components:{
        Layout,
        Album
    },
    async created(){
         this.$store.dispatch('albums/fetchAlbums')
    },
    computed: {
        albums() {
            return this.$store.state.albums.all
        }
    }
}
</script>

<style>
* {
    box-sizing: border-box;
}
 body{
     margin: 0;
 }
</style>